import styles from "./Footer.module.css"

export function FooterSection({title}){
    return (
        <div className={styles.footerSection}>{title}</div>
    )
}