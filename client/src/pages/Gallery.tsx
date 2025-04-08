import Gallery from "@/components/home/Gallery";
import { Helmet } from "react-helmet";

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Devi Shakuntala Shikshan Sansthan</title>
        <meta name="description" content="Explore our campus, events, and student life through photos and videos at Devi Shakuntala Shikshan Sansthan." />
      </Helmet>
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center text-[#003366] mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Explore our campus, events, and student life through photos and videos.
          </p>
        </div>
      </div>
      <Gallery showHeader={false} />
    </>
  );
};

export default GalleryPage;