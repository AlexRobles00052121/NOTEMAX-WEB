import Header from '../../components/Header/Header';
import NewNoteForm from '../../components/Notes/NewNote/NewNoteForm'
import NotesFeed from '../../components/Notes/NotesFeed/NotesFeed';

const InApp = () => {
    return (
        <article>
        <Header />
        <NewNoteForm />
        <NotesFeed />
        </article>
    );
}

export default InApp;