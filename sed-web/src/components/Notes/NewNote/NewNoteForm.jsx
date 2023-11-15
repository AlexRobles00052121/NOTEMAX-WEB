import { useState, useContext } from "react";
import classes from "./NewNoteForm.module.scss";
import { BiEraser } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { NoteContext } from "../../../contexts/NoteContext";

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function NewNoteForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    

    /*const { keyId, setKeyId, CreateNote } = useContext(NoteContext);*/

    const handleCleanupClick = () => {
        setDescription("");
        setTitle("");
        setType("");
    }

    const token = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault();

        const noteData = {
            tittle: title,
            content: description,
            categories: type,
        }

        fetch('http://localhost:4000/api/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`  },
            body: JSON.stringify(noteData)
        })
            .then(response => {
                if(response.status === 200){
                    console.log('Note created')
                }else{
                    console.log('Error')
                }
            })

        /*CreateNote({
            id: setKeyId(keyId + 1),
            title,
            type,
            description,
        });
        setTitle("");
        setDescription("");
        setType("");*/
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
                        <select
                            className={classes["note__select"]}
                            onChange={(e) => setType(e.target.value)}
                            value={type}
                            required>
                            <option value="" selected  > Select a type for your note</option>
                            <option value="draft">Reminders</option>
                            <option value="social">Social</option>
                            <option value="math">Math</option>
                            <option value="science">Friends</option>
                        </select>
                        <textarea
                            className={classes["form-textarea"]}
                            placeholder="Write your note here..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
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