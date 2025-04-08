import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./emailService";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for admission requests
  app.post('/api/admission-request', async (req, res) => {
    try {
      const { name, email, phone, program } = req.body;
      
      // Validate required fields
      if (!name || !email || !phone || !program) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Send email notification
      const emailResult = await sendEmail({
        to: 'learnwithanukalp@gmail.com',
        subject: `New Admission Request: ${name}`,
        html: `
          <h2>New Admission Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Program of Interest:</strong> ${program}</p>
          <p><em>This request was submitted from the Devi Shakuntala College website.</em></p>
        `
      });

      if (!emailResult) {
        console.warn('Email failed to send but will return success to user');
      }
      
      return res.status(200).json({ 
        message: "Admission request received successfully",
        requestId: Date.now().toString()
      });
    } catch (error) {
      console.error('Error processing admission request:', error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // API endpoint for contact form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !phone || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Send email notification
      const emailResult = await sendEmail({
        to: 'learnwithanukalp@gmail.com',
        subject: `New Contact Form: ${subject}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p><em>This message was submitted from the Devi Shakuntala College website.</em></p>
        `
      });

      if (!emailResult) {
        console.warn('Email failed to send but will return success to user');
      }
      
      return res.status(200).json({ 
        message: "Contact message received successfully",
        requestId: Date.now().toString()
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // File upload for documents
  const uploadsDir = path.join(process.cwd(), 'uploads');
  
  // Create uploads directory if it doesn't exist
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Simple file system-based storage for documents
  app.post('/api/documents/upload', async (req, res) => {
    try {
      const { title, category, description, fileName, fileData } = req.body;
      
      // Validate required fields
      if (!title || !category || !fileName || !fileData) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Create a unique filename to avoid collisions
      const uniqueFileName = `${Date.now()}-${fileName}`;
      const filePath = path.join(uploadsDir, uniqueFileName);
      
      // Decode and save the base64 file data
      const fileBuffer = Buffer.from(fileData.split(',')[1], 'base64');
      fs.writeFileSync(filePath, fileBuffer);
      
      // Store document metadata for retrieval
      const documentMeta = {
        id: Date.now().toString(),
        title,
        category,
        description: description || '',
        fileName: uniqueFileName,
        originalName: fileName,
        uploadDate: new Date().toISOString(),
        downloadUrl: `/api/documents/download/${uniqueFileName}`
      };
      
      // In a real application, you would save this metadata to a database
      // For simplicity, we're just returning it directly
      
      return res.status(200).json({ 
        message: "Document uploaded successfully",
        document: documentMeta
      });
    } catch (error) {
      console.error('Error uploading document:', error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Document download endpoint
  app.get('/api/documents/download/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(uploadsDir, fileName);
    
    if (fs.existsSync(filePath)) {
      return res.download(filePath);
    } else {
      return res.status(404).json({ message: "File not found" });
    }
  });

  // Get list of documents
  app.get('/api/documents', (req, res) => {
    try {
      // In a real application, you would fetch this from a database
      // For this example, we'll just read the upload directory
      
      const documents = fs.readdirSync(uploadsDir)
        .filter(file => !file.startsWith('.'))  // Filter out hidden files
        .map(fileName => {
          // In a real app, you would fetch metadata from the database
          // For now, we'll just return basic info
          return {
            id: fileName.split('-')[0], // Use timestamp part as ID
            fileName,
            downloadUrl: `/api/documents/download/${fileName}`,
            title: fileName.substring(fileName.indexOf('-') + 1),
            uploadDate: new Date(parseInt(fileName.split('-')[0])).toISOString()
          };
        });
      
      return res.status(200).json({ documents });
    } catch (error) {
      console.error('Error fetching documents:', error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
