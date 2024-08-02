import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/configuration";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-8">
              <div>
                <img
                  width="480"
                  height="480"
                  src="https://img.icons8.com/doodle/1024/question-mark--v1.png"
                  alt="question-mark"
                />
              </div>
              <h1 className="text-6xl font-bold text-orange-100">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
