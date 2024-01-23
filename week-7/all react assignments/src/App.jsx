import { useState } from "react";
import { ProfileCard } from "./profileCard";
import { Background } from "./Background";
import { GithubInfoCard } from "./githubInfoCard";
import { Para } from "./para_generator/para";

function App() {
  const profileCardProps = {
    img: "https://avatars.githubusercontent.com/u/86319200?v=4",
    name: "Mujtaba Khan",
    age: 22,
    city: "Aurangabad: pride of aurangzeb (r.a)",
    followersCount: "171",
    likesCount: "50",
    photosCount: "2",
  };
  return (
    <>
      {/* <ProfileCard {...profileCardProps}/> */}
      {/* <Background />  */}
      {/* <GithubInfoCard /> */}
      <Para />
    </>
  );
}

export default App;
