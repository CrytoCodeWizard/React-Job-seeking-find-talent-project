import Header from "./Header";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Footer from "./Footer";
import { Top } from "./Top";

export default  function LandingPage() {
    return (
        <>
            <Header></Header>
            <Top></Top>
            <Section1 />
            <Section2 />
            <Footer />
      </>
  );
}

