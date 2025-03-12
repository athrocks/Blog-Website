import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Container>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add a New Post
          </h2>
          <PostForm />
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
