import MeetupList from "../components/meetup/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch("https://meetup-react-95bd6-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h2>All Meetup Page</h2>
      <ul>
        <MeetupList meetups={loadMeetups} />
      </ul>
    </div>
  );
}

export default AllMeetupsPage;
