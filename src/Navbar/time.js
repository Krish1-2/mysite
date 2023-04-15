import React from "react";
import styles from "./time.module.css"

const time=()=>{
    const d = new Date();
    const time=d.getHours();
    if(time<=12)
    {return(<div><h1 className={styles.h12}>GOOD MORNING</h1></div>)}
    else if(time>=12 && time<16)
    {return(<div><h1 className={styles.h12}>GOOD AFTERNOON</h1></div>)}
    else if(time>=16)
    {return(<div><h1 className={styles.h12}>GOOD EVENING</h1></div>)}
}

export default time;