import Downloads from "@/components/home/Downloads";
import { Helmet } from "react-helmet";

const DownloadsPage = () => {
  return (
    <>
      <Helmet>
        <title>Downloads - Devi Shakuntala Shikshan Sansthan</title>
        <meta name="description" content="Download important documents, forms, syllabi, and study materials from Devi Shakuntala Shikshan Sansthan." />
      </Helmet>
      <div className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center text-[#003366] mb-4">
            Downloads
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Access important documents, forms, syllabi, and study materials.
          </p>
        </div>
      </div>
      <Downloads showHeader={false} />
    </>
  );
};

export default DownloadsPage;