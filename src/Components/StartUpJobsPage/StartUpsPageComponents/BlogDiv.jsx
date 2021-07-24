import styles from "./StartUps.module.css"

export function BlogDiv({id,title,image}){


    return(<div className={styles.blogElementParent}>
        <img src={image} alt={id} />
        <h3>{title}</h3>
        <a href="dcdc">Read more &#x2192;</a>
    </div>
    )
}
