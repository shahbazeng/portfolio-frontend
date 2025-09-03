import BannerCode from "./BannerCode";
import About from "./About";
import Education from "./Education";
import Experiance from "./Experience";
import Certificate from "./Certificate";
import Skill from "./Skill";
import Project from "./Project";
import CardComponent from "./CardComponent";
import CheckoutResume from "./CheckoutResume";
import Contact from "./Contact";
import FormData from "./FormData";
import Footer from "./Footer";
// import ChatWidget from "./ChatWidget";
import ChatWidget from "./ChatWidget";
import StatsSection from "./StatsSection";

function Home() {
  return (
    <div>
      <BannerCode />
      <About />
      <Education />
      <Experiance />
      <StatsSection />
      <Certificate />
      <Skill />

      <Project />
      <CardComponent />
      <CheckoutResume />
      <Contact />
      <FormData />
      <Footer />
      <ChatWidget webhookUrl="https://n8n.inxgo.com/webhook/8e2c886d-657e-4a14-83a7-dc2a44adfcb6" />
    </div>
  );
}
export default Home;
