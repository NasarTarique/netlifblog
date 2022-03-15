import React, { useState, useEffect, useCallback } from "react";
// import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./styles/read.css";
const Read = () => {
  let { id } = useParams();
  const [blog, putBlog] = useState({});
		const getId =   useCallback(()=>{
				 return id
		},[id])
  useEffect(() => {
    fetch(
      "https://nasartarique.github.io/jsontblogtestrepo/media/blogs/" +
        getId() +
        ".json"
    )
      .then((response) => response.json())
      .then((data) => {
			  putBlog(data);
      });
  }, [getId]);

  return (
    <div className="read-container">
      <div className="Heading-blog" key={id}>{blog.Heading}</div>
      <ReactMarkdown children={blog.Blog}></ReactMarkdown>
      <div className="eoblog"></div>
    </div>
  );
};

export default Read;
