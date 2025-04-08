import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for admission requests
  app.post('/api/admission-request', async (req, res) => {
    try {
      const { name, email, phone, program } = req.body;
      
      // Validate required fields
      if (!name || !email || !phone || !program) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Here you would typically store this information in your database
      // For this example, we'll just return a success response
      
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

      // Here you would typically store this information and/or send an email
      // For this example, we'll just return a success response
      
      return res.status(200).json({ 
        message: "Contact message received successfully",
        requestId: Date.now().toString()
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
