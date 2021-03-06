import { useEffect, useState } from "react";
import classes from "./Score.module.css";

let compScoreG = 0, userScoreG = 0, resetTime = false;
const setCompScore = () => {
    ++compScoreG;
}
const setUserScore = () => {
    ++userScoreG
}
export const setTime = () => {
    resetTime = true;
}
const Score = (props) => {
    var [time, setTime] = useState(15);
    var interval;
    const decrementSeconds = () => {
        setTime(--time);
    }
    useEffect(()=>{
        interval = setInterval(decrementSeconds, 1000);
        if(time < 1){
            clearInterval(interval);
            props.skipQues();
            props.compScore();
            setTime(15);
        }
        return () => clearInterval(interval);
    }, [time])
    
    if(resetTime){
        setTime(15);
        resetTime = false;
        return ;
    }

    return <div className={classes.main}>
    <div className={classes.comp}>
        <h3>Computer</h3>
        <h3>{compScoreG}</h3>
    </div>
    <div className={classes.time}>
        <h1 id="time" style={{color: "white"}}>{time}</h1>
    </div>
    <div className={classes.human}>
        <h3>You</h3>
        <h3>{userScoreG}</h3>
    </div>
    </div>
}
export default Score;


const increaseComp = () => {
    setCompScore(compScoreG+1);
}
const increaseHuman = () => {
    setUserScore(userScoreG+1);
}
export {increaseComp, increaseHuman};