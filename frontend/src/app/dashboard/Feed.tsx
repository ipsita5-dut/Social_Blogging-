"use client";
import React, { useState } from "react";
import Post from "./Post";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "John Doe", content: "Hello world! 🚀" },
    { id: 2, user: "Jane Smith", content: "My first post here!" },
  ]);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
          <h3 className="font-bold text-lg text-gray-800">{post.user}</h3>
          <p className="text-gray-600 mt-2">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
