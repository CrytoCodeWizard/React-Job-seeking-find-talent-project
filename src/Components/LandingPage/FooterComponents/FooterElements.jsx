import styles from "./Footer.module.css"

export function FooterElement({image,category,title,desc}){

    return (
        <div className={styles.footerElementContainer}>
            <img src={image} alt="" />
            <p className={styles.category}>{category}</p>
            <h3>{title}</h3>
            <p className={styles.desc}>{desc}</p>

        </div>
    )
}