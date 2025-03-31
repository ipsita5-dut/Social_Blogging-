import React from "react";
import Navbar from "./mainNav";
import CreatePost from "./CreatePost";
import Feed from "./Feed";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="pt-20 max-w-4xl mx-auto">
        <CreatePost />
        <Feed />
      </div>
    </div>
  );
};

export default Dashboard;
