import styles from "./jobBox.module.css";
import hide from './../../hide.svg'

import { ApplyModal } from "./ApplyModal";
import { useState } from "react";
export function JobBox({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSave,setIsSave]=useState(false)

    const handleSave=()=>{
        setIsSave(prev=>!prev)
    }
    return (
        <div className={styles.container}>
            <ApplyModal data={item} open={isOpen} onClose={() => setIsOpen(false)}></ApplyModal>
            <div className={styles.main}>
                <div className={styles.nameBox}>
                    <div className={styles.imgBox}>
                        <img
                            src={item.image}
                            alt="" />
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
                        <button onClick={() => setIsOpen(true)}>Apply</button>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div onClick={handleSave} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="25" viewBox="0 0 21.9 31.4">
                            <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z" stroke="#0F6FFF" fill={isSave?"#0F6FFF":"none"}></path>
                        </svg>
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
