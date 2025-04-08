import Hero from "@/components/home/Hero";
import Announcement from "@/components/home/Announcement";
import Programs from "@/components/home/Programs";
import Campus from "@/components/home/Campus";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Admissions from "@/components/home/Admissions";
import News from "@/components/home/News";
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
      <About />
      <Testimonials />
      <Admissions />
      <News />
      <Contact />
    </>
  );
};

export default Home;
