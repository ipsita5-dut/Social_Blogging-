import React from "react";
import { Search } from "lucide-react";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-64">
      <Search className="text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Search blogs..."
        className="bg-transparent outline-none pl-2 w-full"
      />
    </div>
  );
};
