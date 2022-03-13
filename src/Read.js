import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./styles/read.css";
const Read = () => {
  const [blog, putBlog] = useState({});

  useEffect(() => {
		  putBlog({
				  "Heading":"This is heading",
				  "Blog":"# This is a Blog  \n\n This is a test blog"

		  })
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
