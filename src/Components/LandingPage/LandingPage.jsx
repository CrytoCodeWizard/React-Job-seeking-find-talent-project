import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "./Footer";
import { Top } from "./Top";
import { FooterMain } from "./FooterMain";

export default function LandingPage() {
    return (
        <>
            <Header />
            <Top />
            <Section1 />
            <Section2 />
            <Footer />
            <FooterMain />
        </>
  );
}

