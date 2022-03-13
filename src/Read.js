import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./styles/read.css";
const Read = () => {
  let { id } = useParams();
  const [blog, putBlog] = useState({});

  useEffect(() => {
    fetch("http://" + window.location.host + "/api/blogs/" + id + "/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Individual blog data");
        console.log(data);
        putBlog(data);
      });
  }, []);

  return (
    <div className="read-container">
      <div className="Heading-blog">{blog.Heading}</div>
      <ReactMarkdown
        children={blog.Blog}></ReactMarkdown>
      <div className="eoblog"></div>
    </div>
  );
};

export default Read;
