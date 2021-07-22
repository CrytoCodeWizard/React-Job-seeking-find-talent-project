import { FooterHeading } from "./FooterComponents/FooterHeading";
import styles from "./FooterComponents/Footer.module.css";
import { FooterElement } from "./FooterComponents/FooterElements";
import { v4 as uuid } from "uuid";



export default function Footer() {
  const data = [
    {
      image: "/download.jfif",
      id: uuid(),
      category: "Careers",
      title: "30 Questions To Ask Before Joining A Startup",
      desc: "You're trying to evaluate the company while still impressing your interviewers, and that balance can be tricky.",
    },
    {
      image: "download (1).jfif",
      id: uuid(),
      category: "Hiring",
      title:
        "9 Terms You'll See In Your Startup Equity Offer—And What They Actually Mean",
      desc: "No one—with the possible exception of finance experts—looks at their equity package and thinks, “Yep, makes sense.”",
    },
    {
      image: "download (2).jfif",
      id: uuid(),
      category: "Hiring",
      title: "Why Naval Ravikant Thinks Remote Work Is The Future",
      desc: "AngelList Founder, Naval Ravikant, says he thinks remote work's time is coming and will be the most important category in hiring.",
    },
  ];

  
  return (
    <div className={styles.container}>
      <FooterHeading></FooterHeading>
      <div className={styles.footerElementOuterContainer}>
        {data.map((e) => (
          <FooterElement key={e.id} {...e}></FooterElement>
        ))}
      </div>

    
    </div>
  );
}
