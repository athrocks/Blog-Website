import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((data) => {
        if (data) setPost(data);
        else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Container>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Edit Post
          </h2>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : (
    <p className="text-center text-gray-600 mt-10">Loading...</p>
  );
}

export default EditPost;
