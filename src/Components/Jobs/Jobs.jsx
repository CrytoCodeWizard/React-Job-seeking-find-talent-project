import {v4 as uuid} from "uuid"
import { JobBox } from "./JobBox";
const style ={
    width:"max-content",
    margin:"auto"
}
export function Jobs({company,lastJobRef,loading}){
    return(
        <div>
            {company.map((el,index)=>{
                if(company.length===index+1){
                    return <div key={uuid()} ref={lastJobRef}><JobBox key={uuid()} item={el}></JobBox></div>
                }
                else{
                    return <JobBox key={uuid()} item={el}></JobBox>
                }
            })}
            <div style={style}>{loading && "Loading..."}</div>
        </div>
    )
}