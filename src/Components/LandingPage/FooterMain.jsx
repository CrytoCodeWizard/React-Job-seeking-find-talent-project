import { FooterSection } from "./FooterComponents/FooterSection";
import styles from "./FooterComponents/Footer.module.css"
import{v4 as uuid} from "uuid"
export function FooterMain(){
    const angelList = [
        "About",
        "Startup Jobs",
        "Recruiting",
        "Venture Investing",
        "We're Hiring",
        "Product Hunt",
        "Help Center",
        "Press",
        "Unsubscribe",
      ];
    
      const jobCollection = [
        "Remote First Future Jobs",
        "Jobs for Bootcamp Grads",
        "Junior Software Engineer Jobs",
        "Y Combinator Startup Jobs",
        "Female-founded Startup Jobs",
        "52 Best Startup Companies To Watch Out For in 2020",
      ];
    
      const byLocation = [
        "Jobs in New York City",
        "Jobs in San Francisco",
        "Jobs in Austin",
        "Jobs in Boston",
        "Jobs in Washington DC",
        "Jobs in Denver",
        "Jobs in Seattle",
        "Jobs in Chicago",
        "Jobs in India",
      ];
    
      const byRole = [
        "Software Engineer Jobs in San Francisco",
        "Software Engineer Jobs in New York City",
        "Software Engineer Jobs in Los Angeles",
        "Product Manager Jobs in San Francisco",
        "Product Manager Jobs in New York City",
        "Product Manager Jobs in Los Angeles",
        "Frontend Developer Jobs in San Francisco",
        "Frontend Developer Jobs in New York City",
        "Frontend Developer Jobs in Los Angeles",
      ];
    
      const inTech = [
        "AI & Machine Learning",
        "Business",
        "Data & Analytics",
        "Design",
        "Hardware & Gadgets",
        "Management",
        "Marketing & Sales",
        "Product Management",
        "Productivity",
        "Programming",
        "VC & Fundraising",
      ];
    
      const byRole2 = [
        "Software Engineer Jobs",
        "Product Manager Jobs",
        "Data Analyst Jobs",
        "Product Designer Jobs",
        "Graphic Designer Jobs",
        "UI/UX Designer Jobs",
        "Operations Manager Jobs",
        "Growth Marketer Jobs",
        "Account Manager Jobs",
        "Sales Manager Jobs",
        "Financial Analyst Jobs",
        "HR Manager Jobs",
      ];
    
      const blog = [
        "30 Questions To Ask Before Joining A Startup",
        "9 Terms You'll See in Your Startup Equity Offer",
        "The Truth About Finding Your First Engineering Job",
        "How To Hire World-Class Engineers",
        "How To Hire Your First 10 Employees",
        "Naval Ravikant's Guide To Choosing Your First Job In Tech",
      ];
    
      const remoteJobs = [
        "Remote Software Engineer Jobs",
        "Remote Product Manager Jobs",
        "Remote Data Analyst Jobs",
        "Remote Product Designer Jobs",
        "Remote Graphic Designer Jobs",
        "Remote UI/UX Designer Jobs",
        "Remote Operations Manager Jobs",
        "Remote Growth Marketer Jobs",
        "Remote Account Manager Jobs",
        "Remote Sales Manager Jobs",
        "Remote Financial Analyst Jobs",
        "Remote HR Manager Jobs",
      ];
    return (  <div className={styles.footerSectionDiv}>
        <div className={styles.footerSectionContainer}>
          <div className={styles.footerElementBox}>
            <h3>AngelList</h3>
            {angelList.map((e) => (
              <FooterSection key={uuid()} title={e}></FooterSection>
            ))}
          </div>
          <div className={styles.footerElementBox}>
            <h3>Job Collections</h3>
            {jobCollection.map((e) => (
              <FooterSection key={uuid()} title={e}></FooterSection>
            ))}
          </div>
          <div className={styles.footerElementBox}>
            <h3>Jobs by Location</h3>
            {byLocation.map((e) => (
              <FooterSection key={uuid()} title={e}></FooterSection>
            ))}
          </div>
          <div className={styles.footerElementWideBox}>
            <h3>Jobs by Role and Location</h3>
            {byRole.map((e) => (
              <FooterSection key={uuid()} title={e}></FooterSection>
            ))}
          </div>
          <div className={styles.footerElementBox}>
            <h3>Today in Tech</h3>
            {inTech.map((e) => (
              <FooterSection key={uuid()} title={e}></FooterSection>
            ))}
          </div>
          <div className={styles.footerElementBox}>
            <h3>Jobs by Role</h3>
            {byRole2.map((e) => (
              <FooterSection key={uuid()} title={e}></FooterSection>
            ))}
          </div>
          <div className={styles.footerElementBox}>
            <h3>Our Blog</h3>
            {blog.map((e) => (
              <FooterSection key={uuid()} title={e}></FooterSection>
            ))}
          </div>
          <div className={styles.footerElementWideBox}>
            <h3>Remote Jobs</h3>
            {remoteJobs.map((e) => (
              <FooterSection key={uuid()} title={e}></FooterSection>
            ))}
          </div>
          <div className={styles.bottomLinks}>
            <img src="/angellogo.png" alt="logo" />
            <div>AngelList</div>
            <div>Twitter</div>
            <div>Terms & Risks</div>
            <div>Privacy Policy & Cookies</div>
            <div>Unsubscribe</div>
            <div>Press</div>
          </div>
        </div>
      </div>

    )
}