import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import classes from "../SingleNote/SingleNote.module.scss";

function UserFeed() {
    const [user, setUser] = useState([]);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");
    const [showNotes, setShowNotes] = useState(false);



    const isAdmin = () => {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken && decodedToken.role === "admin";
        } catch (error) {
            console.error("Error decoding token:", error);
            return false;
        }
    };

    const isSuperAdmin = () => {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken && decodedToken.role === "superadmin";
        } catch (error) {
            console.error("Error decoding token:", error);
            return false;
        }
    };

    useEffect(() => {
        if (isAdmin() || isSuperAdmin()) {
            fetch("http://172.16.48.128/api/users", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setUser(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching notes:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [token, setUser]);

    useEffect(() => {
        if (isAdmin() || isSuperAdmin()) {
            fetch("http://172.16.48.128/api/ad/notes", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setNotes(data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching notes:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [notes, setNotes]);


    const DeleteUser = (userId) => {
        fetch(`http://172.16.48.128/api/users?id=${userId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (response.ok) {
                    setUser((prevUser) => prevUser.filter((user) => user.id !== userId));
                } else {
                    console.error("Error deleting user:", response.statusText);
                }
            })
            .catch((error) => {
                console.error("Error deleting user:", error);
            });
    };

    function DeleteNote(id) {
        fetch(`http://172.16.48.128/api/notes/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                setNotes(notes.filter(note => note.id !== id));
            })
            .catch(error => {
                console.error('Something went wrong:', error);
            });
    }

    const toggleNotesVisibility = () => {
        setShowNotes(!showNotes);
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (isAdmin() || isSuperAdmin()) {
        return (
            <div>
                <section className={classes["notes-feed"]}>
                    <h2 className={classes["notes-feed__title"]}>Users...</h2>
                    {user && user.map((userData) => (
                        <article className={classes["note"]} key={userData.id}>
                            {/* Render user details here */}
                            <div className={classes["div_note"]}>
                                <h3 className={classes["note__title"]}>{userData.user}</h3>
                                <p className={classes["note__type"]}>{userData.role}</p>
                                <p className={classes["note__description"]}>{userData.email}</p>
                                <div className={classes["div_button"]}>
                                    <button
                                        className={classes["note__button"]}
                                        onClick={() => DeleteUser(userData.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <button onClick={toggleNotesVisibility}>Toggle Notes</button>

                {showNotes &&
                    <section className={classes["notes-feed"]}>
                        <h2 className={classes["notes-feed__title"]}>Notes...</h2>
                        {notes && notes.map((notesData) => (
                            <article className={classes["note"]} key={notesData.id}>
                                {/* Render user details here */}
                                <div className={classes["div_note"]}>
                                    <h3 className={classes["note__title"]}>{notesData.tittle}</h3>
                                    <p className={classes["note__type"]}>{notesData.categories}</p>
                                    <p className={classes["note__description"]}>{notesData.content}</p>
                                    <div className={classes["div_button"]}>
                                        <button
                                            className={classes["note__button"]}
                                            onClick={() => DeleteNote(notesData.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>} {/* Render the NotesComponent if showNotes is true */}
            </div>
        );
    } else {
        return null;
    }
}

export default UserFeed;