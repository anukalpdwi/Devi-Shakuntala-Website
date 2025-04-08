import { useState } from "react";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, PlayCircle, X } from "lucide-react";
import campusbg from "@assets/Campus.jpg";
import sportsbg from "@assets/Sports.jpg";
import fest from "@assets/fest.jpg";

// Media items interface
interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  description: string;
  thumbnail: string;
  source: string;
  category: string;
}

// Sample data - would normally come from an API
const galleryItems: MediaItem[] = [
  {
    id: "1",
    type: "image",
    title: "Campus Main Building",
    description: "The administrative block of our college",
    thumbnail: campusbg,
    source: campusbg,
    category: "Campus"
  },
  {
    id: "2",
    type: "image",
    title: "Library",
    description: "Our well-stocked library with thousands of books",
    thumbnail: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    source: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    category: "Facilities"
  },
  {
    id: "3",
    type: "image",
    title: "Graduation Ceremony 2024",
    description: "Students celebrating their academic achievement",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    source: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    category: "Events"
  },
  {
    id: "4",
    type: "video",
    title: "Campus Tour",
    description: "Take a virtual tour of our beautiful campus",
    thumbnail: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0",
    source: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Campus"
  },
  {
    id: "5",
    type: "image",
    title: "Computer Lab",
    description: "Modern computer lab with latest technology",
    thumbnail: "https://www.hillshigh.com/wp-content/uploads/2021/02/lab21-1.jpg",
    source: "https://www.hillshigh.com/wp-content/uploads/2021/02/lab21-1.jpg",
    category: "Facilities"
  },
  {
    id: "6",
    type: "image",
    title: "Cultural Event",
    description: "Annual cultural celebration at the college",
    thumbnail: "https://rp-school.vercel.app/Images/annual-day/1.jpg",
    source: "https://rp-school.vercel.app/Images/annual-day/1.jpg",
    category: "Events"
  },
  {
    id: "7",
    type: "video",
    title: "Students Testimonials",
    description: "Hear what our students have to say",
    thumbnail: "https://images.unsplash.com/photo-1610008885395-d4b47147606f",
    source: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Students"
  },
  {
    id: "8",
    type: "image",
    title: "Sports Ground",
    description: "Well-maintained sports facilities",
    thumbnail: sportsbg,
    source: sportsbg,
    category: "Facilities"
  },
  {
    id: "9",
    type: "image",
    title: "Fest and Events",
    description: "Annual Fest and Events Celebration",
    thumbnail: fest,
    source: fest,
    category: "Events"
  }
];

const MediaViewer = ({ item }: { item: MediaItem }) => {
  if (item.type === 'image') {
    return (
      <img 
        src={item.source} 
        alt={item.title} 
        className="w-full h-auto max-h-[80vh] rounded-lg object-contain"
      />
    );
  } else {
    return (
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <iframe
          src={item.source}
          title={item.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    );
  }
};

interface GalleryProps {
  showHeader?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ showHeader = true }) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories
  const categories = Array.from(new Set(galleryItems.map(item => item.category)));

  // Filter items by category
  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#003366] mb-4">Gallery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our campus, events, and student life through photos and videos.
            </p>
          </div>
        )}

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-gray-200 flex-nowrap">
              <TabsTrigger 
                value="all"
                onClick={() => setActiveCategory('all')}
                className="data-[state=active]:bg-[#003366] data-[state=active]:text-white whitespace-nowrap"
              >
                All Media
              </TabsTrigger>
              {categories.map(category => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
                      <CardContent className="p-0 relative">
                        <div className="aspect-video w-full overflow-hidden">
                          <img 
                            src={item.thumbnail} 
                            alt={item.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                            <p className="text-sm text-gray-200">{item.description}</p>
                          </div>
                          {item.type === 'video' && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <PlayCircle className="h-16 w-16 text-white opacity-80" />
                            </div>
                          )}
                          {item.type === 'image' && (
                            <div className="absolute top-4 right-4">
                              <Image className="h-6 w-6 text-white opacity-80" />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw]">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <MediaViewer item={item} />
                      <p className="mt-4 text-gray-600">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>

          {/* Category tabs content */}
          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden group">
                        <CardContent className="p-0 relative">
                          <div className="aspect-video w-full overflow-hidden">
                            <img 
                              src={item.thumbnail} 
                              alt={item.title}
                              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 text-white">
                              <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                              <p className="text-sm text-gray-200">{item.description}</p>
                            </div>
                            {item.type === 'video' && (
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <PlayCircle className="h-16 w-16 text-white opacity-80" />
                              </div>
                            )}
                            {item.type === 'image' && (
                              <div className="absolute top-4 right-4">
                                <Image className="h-6 w-6 text-white opacity-80" />
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[90vw]">
                      <DialogHeader>
                        <DialogTitle>{item.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <MediaViewer item={item} />
                        <p className="mt-4 text-gray-600">{item.description}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;