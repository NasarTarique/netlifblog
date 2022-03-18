import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/blogs.css";
const Blog = () => {
  const [blogs, getBlog] = useState([]);

  useEffect(() => {
		  document.title = "Blogs - Tarique Nasar";
		  fetch("https://nasartarique.github.io/jsontblogtestrepo/media/blogs/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getBlog(data['blogs']);
      });
  }, []);

  const getBlock = () => {
    return blogs.map((elem) => {
      return (
        <div className="blog-block" key={elem.id}>
          <h2 className="blog-name">{elem.Heading}</h2>
          <p>{elem.Description}</p>
          <div className="read-button">
				  <Link to={"/blogs/"+elem.id}>READ MORE</Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="blogs-container">
      <div className="blogs">
        <p className="blogs-header">BLOGS</p>
        {getBlock()}
      </div>
    </div>
  );
};

export default Blog;
