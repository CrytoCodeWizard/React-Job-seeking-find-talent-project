import styles from "./Footer.module.css"
export  function FooterHeading(){

    return(
        <div className={styles.footerHeadingContainer}>
            <h2 className={styles.footerHeading}>Go deeper on startups </h2>
            <p className={styles.paragraph}> Read more on the blog</p>
        </div>
    )
}