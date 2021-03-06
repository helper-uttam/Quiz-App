import classes from "./Welcome.module.css";
import { useHistory } from "react-router-dom";

const Welcome = (props) => {
    const history = useHistory();

    const optionHandler = (e) => {
        console.log(e.target.value);
        if(e === "DevOps")
        props.category("DevOps");
        else
        props.category(e.target.value);
        history.push('/game');
        startMusic();
    }
    
    const startMusic = () => {
        let audio = new Audio("/assets/background.mp3");
        audio.play()
        audio.addEventListener('ended', function () {
            audio.currentTime = 0;
            audio.play();
        }, false);

        // document.getElementById('question_area').scrollIntoView();
        // optionHandler("DevOps");
    } 
    return <div className={classes.welcome}>
    <div>
        <h1 className={classes.title}>Learn With Fun</h1>
    </div>
    <div className={classes.tags}>
    <select onChange={optionHandler} id={classes.courses}>
        <option className={classes.options}>Select an Option</option>
        <option className={classes.options} value="DevOps">DevOps</option>
        <option className={classes.options} value="Docker">DOCKER</option>
        <option className={classes.options} value="sql">MySQL</option>
        <option className={classes.options} value="bash">BASH</option>
        <option className={classes.options} value="Linux">LINUX</option>
    </select>
    </div>  
    </div>
}

export default Welcome;