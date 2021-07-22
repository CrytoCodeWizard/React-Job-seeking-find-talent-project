import styles from "./jobBox.module.css";
import star from './../../star.svg'
import hide from './../../hide.svg'
import { ApplyModal } from "./ApplyModal";
import { useState } from "react";
export function JobBox({item}) {
    const[isOpen,setIsOpen]=useState(false);
    
    return (
        <div className={styles.container}>
            <ApplyModal data={item} open={isOpen} onClose={()=>setIsOpen(false)}></ApplyModal>
         <div className={styles.main}>
            <div className={styles.nameBox}>
                <div className={styles.imgBox}>
                    <img
                        src={item.image}
                        alt=""/>
                </div>
                <div>
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                    <span>{item.employees}</span>
                </div>
            </div>
            <div className={styles.active}>
                <p>ACTIVELY HIRING</p>
            </div>
            <div className={styles.jobDetails}>
                <div>
                    <p>{item.job}</p>
                    <p>{item.location}</p>
                    <p>₹{item.salaryMin}L-₹{item.salaryMax}L</p>
                </div>
                <div>
                    <span>1 week ago</span>
                    <button onClick={()=>setIsOpen(true)}>Apply</button>
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    <img src={star} alt="" />
                    <p>Save</p>
                </div>
                <div>
                    <img src={hide} alt="" />
                    <div>Hide</div>
                </div>
            </div>
        </div>
        </div>
    );
}
