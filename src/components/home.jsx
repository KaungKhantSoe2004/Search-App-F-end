"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaSpinner, FaExclamationCircle } from "react-icons/fa";
import SearchBox from "./searchConponent";
import PostList from "./postList";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log(response.data);
        const randomPosts = response.data
          .sort(() => Math.random() - 0.5) // Shuffle the array
          .slice(0, 10);
        setPosts(response.data);
        setFilteredPosts(randomPosts);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
        console.log(err);
        setIsLoading(false);
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = (term) => {
    setSearchValue(term);

    if (!term.trim()) {
      setFilteredPosts(posts);
      return;
    }

    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.body.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredPosts(filtered);
  };

  return (
    <main className=" min-h-screen " style={{ backgroundColor: "#F5F4F2" }}>
      <div className="container  mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1
            className="text-4xl text-black font-bold  mb-2"
            style={{ color: "#004AAD" }}
          >
            Post Search
          </h1>
          <p className="text-gray-600">Search our ETS VERDICT posts</p>
        </div>

        <SearchBox onSearch={handleSearch} />

        {isLoading ? (
          <div className=" flex justify-center">
            <FaSpinner className="animate-spin text-4xl text-blue-500" />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg my-6">
            <p>{error}</p>
          </div>
        ) : (
          <PostList
            posts={filteredPosts}
            searchValue={searchValue}
            noResultsMessage="No posts found matching your search criteria."
          />
        )}
      </div>
    </main>
  );
};

export default Home;
