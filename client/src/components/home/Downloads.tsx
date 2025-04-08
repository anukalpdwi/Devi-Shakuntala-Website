import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileDown, 
  FileText, 
  FileArchive, 
  BookOpen, 
  Calendar, 
  FileSpreadsheet,
  Download 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Types for downloads
interface DownloadItem {
  id: string;
  title: string;
  category: string;
  fileName: string;
  uploadDate: string;
  downloadUrl: string;
}

// Document category icons
const categoryIcons: Record<string, React.ReactNode> = {
  "Syllabus": <BookOpen className="h-5 w-5" />,
  "Timetable": <Calendar className="h-5 w-5" />,
  "Form": <FileText className="h-5 w-5" />,
  "Result": <FileSpreadsheet className="h-5 w-5" />,
  "Notice": <FileText className="h-5 w-5" />,
  "Study Material": <FileArchive className="h-5 w-5" />,
  "Other": <FileDown className="h-5 w-5" />
};

const Downloads = () => {
  const [documents, setDocuments] = useState<DownloadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");

  // Fetch documents
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch('/api/documents');
        if (!response.ok) {
          throw new Error('Failed to fetch documents');
        }
        const data = await response.json();
        setDocuments(data.documents || []);
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.documents.map((doc: DownloadItem) => doc.category))
        );
        setCategories(uniqueCategories as string[]);
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Filter documents by category
  const filteredDocuments = activeCategory === 'all'
    ? documents
    : documents.filter(doc => doc.category === activeCategory);

  // Sample documents for initial display
  const sampleDocuments: DownloadItem[] = [
    {
      id: "1",
      title: "BA 1st Year - Syllabus 2025",
      category: "Syllabus",
      fileName: "BA_Syllabus_2025.pdf",
      uploadDate: new Date().toISOString(),
      downloadUrl: "#"
    },
    {
      id: "2",
      title: "BCom 2nd Year - Timetable",
      category: "Timetable",
      fileName: "BCom_Timetable_2025.pdf",
      uploadDate: new Date().toISOString(),
      downloadUrl: "#"
    },
    {
      id: "3",
      title: "Admission Form 2025-26",
      category: "Form",
      fileName: "Admission_Form_2025.pdf",
      uploadDate: new Date().toISOString(),
      downloadUrl: "#"
    },
    {
      id: "4",
      title: "PGDCA - Lab Materials",
      category: "Study Material",
      fileName: "PGDCA_Lab_Materials.pdf",
      uploadDate: new Date().toISOString(),
      downloadUrl: "#"
    },
    {
      id: "5",
      title: "End Semester Examination Notice",
      category: "Notice",
      fileName: "Exam_Notice_2025.pdf",
      uploadDate: new Date().toISOString(),
      downloadUrl: "#"
    },
    {
      id: "6",
      title: "MSW Program Guidelines",
      category: "Study Material",
      fileName: "MSW_Guidelines.pdf",
      uploadDate: new Date().toISOString(),
      downloadUrl: "#"
    },
  ];

  const displayDocuments = documents.length > 0 ? filteredDocuments : sampleDocuments;
  const displayCategories = categories.length > 0 ? categories : ["Syllabus", "Timetable", "Form", "Study Material", "Notice"];

  return (
    <section id="downloads" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-4">Downloads</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Download important documents, forms, syllabi, and study materials.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-gray-200 flex-nowrap">
              <TabsTrigger 
                value="all"
                onClick={() => setActiveCategory('all')}
                className="data-[state=active]:bg-[#003366] data-[state=active]:text-white whitespace-nowrap"
              >
                All Documents
              </TabsTrigger>
              {displayCategories.map(category => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                  className="data-[state=active]:bg-[#003366] data-[state=active]:text-white whitespace-nowrap"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {loading ? (
                // Loading placeholders
                Array(6).fill(0).map((_, index) => (
                  <Card key={index} className="bg-white rounded-lg shadow-md animate-pulse">
                    <CardContent className="p-6 h-40"></CardContent>
                  </Card>
                ))
              ) : displayDocuments.length === 0 ? (
                <div className="col-span-3 text-center py-12">
                  <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-bold text-gray-500">No documents available</h3>
                  <p className="text-gray-500 mt-2">Check back later for updates</p>
                </div>
              ) : (
                displayDocuments.map((doc) => (
                  <Card key={doc.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row items-start mb-4">
                        <div className="bg-[#003366]/10 p-3 rounded-full mr-4 mb-3 sm:mb-0">
                          {categoryIcons[doc.category] || <FileDown className="h-5 w-5 text-[#003366]" />}
                        </div>
                        <div className="flex-1">
                          <Badge className="bg-[#800000] text-white mb-2">{doc.category}</Badge>
                          <h3 className="font-heading font-bold text-lg text-[#003366] mb-1 break-words">{doc.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">
                            Uploaded: {formatDate(doc.uploadDate)}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <a
                          href={doc.downloadUrl}
                          download
                          className="inline-flex items-center text-sm font-medium text-[#800000] hover:text-[#003366]"
                        >
                          <Download className="mr-1 h-4 w-4" />
                          Download
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Create a tab content for each category */}
          {displayCategories.map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {loading ? (
                  // Loading placeholders
                  Array(3).fill(0).map((_, index) => (
                    <Card key={index} className="bg-white rounded-lg shadow-md animate-pulse">
                      <CardContent className="p-6 h-40"></CardContent>
                    </Card>
                  ))
                ) : displayDocuments.length === 0 ? (
                  <div className="col-span-3 text-center py-12">
                    <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-xl font-bold text-gray-500">No {category} documents available</h3>
                    <p className="text-gray-500 mt-2">Check back later for updates</p>
                  </div>
                ) : (
                  displayDocuments.map((doc) => (
                    <Card key={doc.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row items-start mb-4">
                          <div className="bg-[#003366]/10 p-3 rounded-full mr-4 mb-3 sm:mb-0">
                            {categoryIcons[doc.category] || <FileDown className="h-5 w-5 text-[#003366]" />}
                          </div>
                          <div className="flex-1">
                            <Badge className="bg-[#800000] text-white mb-2">{doc.category}</Badge>
                            <h3 className="font-heading font-bold text-lg text-[#003366] mb-1 break-words">{doc.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">
                              Uploaded: {formatDate(doc.uploadDate)}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <a
                            href={doc.downloadUrl}
                            download
                            className="inline-flex items-center text-sm font-medium text-[#800000] hover:text-[#003366]"
                          >
                            <Download className="mr-1 h-4 w-4" />
                            Download
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Admin button - visible only to authorized users */}
        {/* 
        <div className="mt-12 text-center">
          <Button 
            className="bg-[#003366] text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90"
          >
            Upload New Document
          </Button>
        </div>
        */}
      </div>
    </section>
  );
};

export default Downloads;