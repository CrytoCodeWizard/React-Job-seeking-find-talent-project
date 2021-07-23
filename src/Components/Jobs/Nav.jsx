import styles from "./nav.module.css"
export function Nav({handleSearch}) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.imgBox}>
                    <img src="/images/Angel_Lockup.png" alt="" />
                </div>
                <div className={styles.leftBox}>
                    <input onChange={(e)=>{handleSearch(e.target.value)}} type="text" placeholder="Search" />
                    <img src="/magnifying-glass.png" alt="" />
                    <img src="/images/bell.png" alt="" />
                    <div>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png" alt="" />
                        <div>
                            <p>Shubham verma</p>
                            <span>Ready to interview</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}