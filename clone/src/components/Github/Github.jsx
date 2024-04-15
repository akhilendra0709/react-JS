// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/akhilendra0709")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <>
      <div className="bg-slate-200">
        <div className="text-center font-mono text-5xl p-5 m-2 bg-purple-500">
          Github Followers count: {data.followers}
        </div>
        <div className="text-center font-mono text-5xl p-5 m-2 bg-pink-500">
          Github Following count: {data.following}
        </div>
        <img className="rounded-full p-6 m-6" src={data.avatar_url} />
        <div className="text-center font-mono text-3xl max-w-2xl p-5 m-5 bg-blue-500">
          Username: {data.login}
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoad = async () => {
  const response = await fetch("https://api.github.com/users/akhilendra0709");
  return response.json();
};
