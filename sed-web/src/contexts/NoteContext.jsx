import { createContext, useEffect, useState } from "react";

export const NoteContext = createContext();

function NoteContextProvider(props) {
    const [notes, setNotes] = useState([]);
    const [keyId, setKeyId] = useState(4)

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            fetch("http://localhost:4000/api/notes", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => { console.log(data) })
                .catch((error) => console.log(error));
        }
    }, [token, setNotes]);

    function CreateNote(note) {

        setNotes([...notes, { id: keyId, title: note.title, type: note.type, description: note.description }])
        
        fetch("http://localhost:4000/api/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: note.title,
                type: note.type,
                description: note.description,
            }),
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            return response.json()
        })
        .then(newNote => {
            setNotes([...notes, newNote])
        
        })
        .catch(error => {
            console.error('Something went wrong:', error);
        });
    }

    function DeleteNote(id) {
        fetch(`http://localhost:4000/api/notes/${id}`, {
            method: "DELETE",
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Something went wrong')
            }
            setNotes(notes.filter(note => note.id !== id))
        })
        .catch
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