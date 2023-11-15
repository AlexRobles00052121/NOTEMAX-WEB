import { useState } from "react";
import classes from "./NewNoteForm.module.scss";
import { BiEraser } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';


function NewNoteForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

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
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify(noteData)
        })
            .then(response => {
                if (response.status === 200) {
                    console.log('Note created')
                } else {
                    console.log('Error')
                }
            })

        window.location.reload();
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
                            <option value="friends">Science</option>
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