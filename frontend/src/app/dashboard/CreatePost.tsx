"use client";

import React, { useState } from "react";

const CreatePost: React.FC = () => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (!content.trim()) return;
    console.log("New Post:", content);
    setContent(""); // Clear input after posting
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl mb-6 border border-gray-200 max-w-2xl mx-auto">
      <textarea
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={4}
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="mt-3 w-full bg-amber-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-400 transition-all"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
