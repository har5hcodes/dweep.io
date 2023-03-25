import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  const HeaderData = {
    header: "An inspiring design delivered to your inbox every morning",
    caption:
      " Our team scouts the internet for the best designs, illustration andart and deiers a truly inspiring one every day to your inbox",
    tagline1: "Show me how it looks",
    tagline2: "Free - No Spam - No Data Sharing",
  };

  const FooterData = {
    footerLinks: [
      "Prompt Generator",
      "Dweep Daily",
      "All Contributors",
      "Your data on Dweep.io",
      "Contribute to Dweep",
    ],

    emailAddress: "hello@dweep.io",
  };

  return (
    <>
      <div className="container">
        <HeroSection data={HeaderData} />
        <Footer data={FooterData} />
      </div>
    </>
  );
}

export default App;
