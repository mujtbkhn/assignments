import { useEffect, useState } from "react";

export const GithubInfoCard = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/mujtbkhn");
        if (!response.ok) {
          throw new Error("failed to fetch data");
        }
        const json = await response.json();
        setUserInfo(json);
      } catch (error) {
        console.log("error: ", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {userInfo ? (
        <>
          <img src={userInfo.avatar_url} />
          <h1>Name: {userInfo.name}</h1>
          <h2>Followers: {userInfo.followers}</h2>
          <h2>Following: {userInfo.following}</h2>
          <h3>Repository links: {userInfo.repos_url}</h3>
          <h4>No of Public repos: {userInfo.public_repos}</h4>
          <p>Created at: {userInfo.created_at}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
