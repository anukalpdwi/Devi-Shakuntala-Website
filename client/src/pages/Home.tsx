import Hero from "@/components/home/Hero";
import Announcement from "@/components/home/Announcement";
import Programs from "@/components/home/Programs";
import Campus from "@/components/home/Campus";
import Gallery from "@/components/home/Gallery";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Admissions from "@/components/home/Admissions";
import Downloads from "@/components/home/Downloads";
import Contact from "@/components/home/Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Devi Shakuntala Shikshan Sansthan - Excellence in Education</title>
        <meta name="description" content="Devi Shakuntala Shikshan Sansthan is a leading educational institution offering various undergraduate, postgraduate and diploma programs. Join us to shape your future." />
      </Helmet>
      <Hero />
      <Announcement />
      <Programs />
      <Campus />
      <Gallery />
      <About />
      <Testimonials />
      <Admissions />
      <Downloads />
      <Contact />
    </>
  );
};

export default Home;
