import classes from "./Navbar.module.css";

const Navbar = () => {

    const handleClick = () => {
        localStorage.clear();
        window.location = "https://quizgame-9611d.web.app";
    }

    return <div className={classes.nav}>
        <button className={classes.btn} onClick={handleClick}>LogOut</button>
    </div>
}

export default Navbar;