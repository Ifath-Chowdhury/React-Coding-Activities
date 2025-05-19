import './App.css';

function ProfileCard(props) {
  return (
  <div className="profile-card">
    <div className="left-column"> 
      <img src={props.profile.image} alt="A picture of the person"></img>
      <h1>{props.profile.name}</h1>
    </div>
    <div className="right-column">
        <h2>{props.profile.jobTitle}</h2>
        <p>{props.profile.bio}</p>
    </div>
    <br></br>
  </div>);
}

function App() {
  const profiles = [
    {
      image: "https://example.com/image1.jpg",
      name: "John Doe",
      jobTitle: "Frontend Developer",
      bio: "Passionate about creating user-friendly web applications."
    },
    {
      image: "https://example.com/image1.jpg",
      name: "Dave Smith",
      jobTitle: "Backend Developer",
      bio: "Passionate about making web applications as unusable as possible. He's getting fired next week."
    },
    {
      image: "https://example.com/image1.jpg",
      name: "John Johnson",
      jobTitle: "Janitor",
      bio: "Passionate about cleaning toilets."
    }
  ];

  return (
    <div className="app">
      <header>
        <h1>Team Profiles</h1>
      </header>
      {/* Use the map function here to render ProfileCard components*/ 
      profiles.map((profile) => <div className="profile"><ProfileCard profile={profile}/></div>)}
    </div>
  );
}

export default App;
