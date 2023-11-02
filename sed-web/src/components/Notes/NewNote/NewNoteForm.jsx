import classes from "./NewNoteForm.module.scss";
import { BiEraser} from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';

const NewNoteForm = () => {
    return(
        <section>
            <div className={classes["container"]}>
                <div className={classes["form"]}>
                    <form>   
                        <label>
                            <textarea name="content"
                            type="text"
                            placeholder="Write your note here..."
                            />
                        </label>
                        <div className={classes["Bottons"]}> 
                            <button className={classes["ButtonD"]}>  Cleanup <BiEraser /> </button>
                            <button className={classes["ButtonC"]}>  Save <BsCheckCircle/></button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </section>        
    )   
    
}

export default NewNoteForm;