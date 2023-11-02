import classes from "./Header.module.scss";

const Header = () => {
    return(
        <header className={classes["Header"]}>
            
            <div className={classes["Title"]}>
                <h1> NoteMax </h1>
            </div>

            <div className={classes["Bottons"]}>
                <button className={classes["Button"]}> Login </button>
            </div>

        </header>
    )   
    
}

export default Header;