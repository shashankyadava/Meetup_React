import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupsPage() {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) =>{
    fetch(
      'https://meetup-react-95bd6-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Constent-Type': 'application/json'
        }
      }
    ).then(()=>{
      navigate('/', {replace: true})
    });
  }
  return (
    <div>
      <h2>Add New Meetup Form</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupsPage;
