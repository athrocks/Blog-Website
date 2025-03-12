import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authStatus) {
      appwriteService.getAllPosts().then((posts) => {
        if (posts) setPosts(posts.documents);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [authStatus]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-600">Loading posts...</p>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gray-100">
      <Container>
        {!authStatus ? (
          <div className="text-center py-10">
            <h1 className="text-3xl font-bold text-gray-800">
              Login to Read Posts
            </h1>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-10">
            <h1 className="text-3xl font-bold text-gray-800">
              No posts available. Start writing!
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;