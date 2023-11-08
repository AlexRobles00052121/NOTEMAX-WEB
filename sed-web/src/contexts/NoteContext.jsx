import { createContext, useEffect, useState } from "react";
import { notes as data } from '../data/notes';

export const NoteContext = createContext();

function NoteContextProvider(props) {
    const [notes, setNotes] = useState([]);
    const [keyId, setKeyId] = useState(4)

    function CreateNote(note) {
        setNotes([
            ...notes,
            {
                id: keyId,
                title: note.title,
                description: note.description,
            },
        ]);
    }

    useEffect(() => {
        setNotes(data);
    }, []);

    function DeleteNote(id) {
        setNotes(notes.filter((note) => note.id !== id));
    }

    return (
        <NoteContext.Provider
            value={{
                keyId,
                setKeyId,
                notes,
                CreateNote,
                DeleteNote
            }}
        >
            {props.children}
        </NoteContext.Provider>
    );

}

export default NoteContextProvider