/* eslint-disable react/prop-types */
import classes from "./SingleNote.module.scss";
import { useContext } from "react";
import { NoteContext } from '../../../contexts/NoteContext';


function SingleNote({ note }) {
    const { DeleteNote } = useContext(NoteContext);

    return (
        <article className={classes["note"]}>
            <div className={classes["div_note"]}>
                <h3 className={classes["note__title"]}>{note.title}</h3>
                <p className={classes["note__type"]}>{note.type}</p>
                <p className={classes["note__description"]}>{note.description}</p>
                <div className={classes["div_button"]}>
                    <button className={classes["note__button"]} onClick={() => DeleteNote(note.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </article>
    )
}

export default SingleNote;