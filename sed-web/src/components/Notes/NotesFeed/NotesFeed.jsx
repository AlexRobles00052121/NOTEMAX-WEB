import SingleNote from '../SingleNote/SingleNote';
import { useContext, useEffect } from "react";
import { NoteContext } from '../../../contexts/NoteContext';
import classes from "./NotesFeed.module.scss";

function NotesFeed() {
    const { notes, setNotes } = useContext(NoteContext);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            fetch("http://localhost:4000/api/notes", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {console.log(data)})
                .catch((error) => console.log(error));
        }
    }, [token, setNotes]);

    if (notes.length === 0) {
        return (
            <section className={classes["notes-feed"]}>
                <h2 className={classes["notes-feed__title"]}>No notes found...</h2>
            </section>
        );
    }

    return (
        <section className={classes["notes-feed"]}>
            <h2 className={classes["notes-feed__title"]}>Notes for you...</h2>
            {notes.map((note) => (
                <SingleNote key={note.id} note={note} />
            ))}
        </section>
    );
}

export default NotesFeed;