import { useState, useContext } from "react";
import classes from "./NewNoteForm.module.scss";
import { BiEraser } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { NoteContext } from "../../../contexts/NoteContext";

function NewNoteForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { keyId, setKeyId, CreateNote } = useContext(NoteContext);
    const handleCleanupClick = () => {
        setDescription("");
        setTitle("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        CreateNote({
            id: setKeyId(keyId + 1),
            title,
            description,
        });
        setTitle("");
        setDescription("");
    };

    return (
        <section>
            <div className={classes["container"]}>
                <div className={classes["form"]}>
                    <form className={classes["form"]} onSubmit={handleSubmit}>
                        <input
                            className={classes["form-input"]}
                            placeholder="Write your title here..."
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                        <textarea 
                            className={classes["form-textarea"]}
                            placeholder="Write your note here..."
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <div className={classes["Bottons"]}>
                            <button type="button" className={classes["ButtonD"]} onClick={handleCleanupClick}>  Cleanup <BiEraser /></button>
                            <button type="submit" className={classes["ButtonC"]} >  Save <BsCheckCircle /></button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}





export default NewNoteForm;