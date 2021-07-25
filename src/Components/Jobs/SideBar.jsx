import { useState } from 'react'
import styles from './sideBar.module.css'
import { Link } from 'react-router-dom';

export function SideBar() {
    const[isSelect,setIsSelect]=useState(1);

    const handleSelect=(s)=>{
        setIsSelect(s)
    }

    return (
        <div className={styles.main}>
            <Link to="/jobs">
            <div onClick={()=>{handleSelect(1)}} className={isSelect===1 ? styles.first:null}>
                <svg fill="none" height="24" viewBox="0 0 16 16" width="24">
                    <path d="M2.56684 4.23096H13.1765C14.3177 4.23096 15.2433 5.15669 15.2433 6.29921V12.2062C15.2433 13.3487 14.3177 14.2744 13.1765 14.2744H2.56684C1.42562 14.2744 0.5 13.3487 0.5 12.2062V6.29921C0.5 5.15669 1.42562 4.23096 2.56684 4.23096Z" stroke="currentColor"></path><mask fill="white" id="path-2-inside-1">
                    <path clipRule="evenodd" d="M4.87891 3.90224C4.87891 2.4837 5.44618 1.33398 6.14522 1.33398H9.6019C10.3009 1.33398 10.8682 2.4837 10.8682 3.90224" fillRule="evenodd"></path></mask>
                    <path d="M6.47891 3.90224C6.47891 3.38456 6.5858 2.9948 6.68491 2.79385C6.73437 2.69354 6.75182 2.70076 6.69421 2.75018C6.62637 2.80838 6.4365 2.93398 6.14522 2.93398V-0.266016C4.85136 -0.266016 4.12376 0.752284 3.81494 1.37847C3.45565 2.10701 3.27891 3.00138 3.27891 3.90224H6.47891ZM6.14522 2.93398H9.6019V-0.266016H6.14522V2.93398ZM9.6019 2.93398C9.31062 2.93398 9.12075 2.80838 9.05291 2.75018C8.9953 2.70076 9.01274 2.69354 9.06221 2.79385C9.16132 2.9948 9.26821 3.38456 9.26821 3.90224H12.4682C12.4682 3.00138 12.2915 2.10701 11.9322 1.37847C11.6234 0.752284 10.8958 -0.266016 9.6019 -0.266016V2.93398Z" fill="currentColor" mask="url(#path-2-inside-1)"></path>
                    <path d="M8.727 7.54053H7.01577C6.54323 7.54053 6.16016 7.92381 6.16016 8.39661C6.16016 8.86941 6.54323 9.2527 7.01577 9.2527H8.727C9.19954 9.2527 9.58262 8.86941 9.58262 8.39661C9.58262 7.92381 9.19954 7.54053 8.727 7.54053Z" stroke="currentColor" fill="none"></path>
                    <path d="M0.597656 11.1792H15.2643" stroke="currentColor"></path>
                </svg>
                <span>Jobs</span>
            </div>
            </Link>

            <Link to="/jobs/applied">
            <div onClick={()=>{handleSelect(2)}} className={isSelect===2 ? styles.second:null}>
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M23 21.4783C23 21.732 22.8992 21.9752 22.7198 22.1546C22.5405 22.334 22.2972 22.4348 22.0435 22.4348H1.95652C1.70284 22.4348 1.45954 22.334 1.28016 22.1546C1.10078 21.9752 1 21.732 1 21.4783V15.7391H7.69565V16.6957C7.69717 17.2026 7.8992 17.6883 8.25764 18.0467C8.61608 18.4051 9.10179 18.6072 9.6087 18.6087H14.3913C14.8982 18.6072 15.3839 18.4051 15.7424 18.0467C16.1008 17.6883 16.3028 17.2026 16.3043 16.6957V15.7391H23V21.4783Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M1 15.7391L4.07139 10.4783C4.1551 10.3333 4.27539 10.2128 4.42025 10.1289C4.56511 10.0449 4.72946 10.0005 4.89687 10H19.1031C19.2705 10.0005 19.4349 10.0449 19.5798 10.1289C19.7246 10.2128 19.8449 10.3333 19.9286 10.4783L23 15.7391" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
                <span>Applied</span>
            </div>
            </Link>
            <Link to="/jobs/assessment">
            <div onClick={()=>{handleSelect(3)}} className={isSelect===3 ? styles.third:null}>
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M20 11V22C20 22.2652 19.8946 22.5196 19.7071 22.7071C19.5196 22.8946 19.2652 23 19 23H2C1.73478 23 1.48043 22.8946 1.29289 22.7071C1.10536 22.5196 1 22.2652 1 22V3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M12.324 14.507L7.375 16.627L9.496 11.677L20.174 1L23.002 3.828L12.324 14.507Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    <path d="M21.1669 5.66402L18.3379 2.83502" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <span>Assessments</span>
            </div>
            </Link>
        </div>
    )
}