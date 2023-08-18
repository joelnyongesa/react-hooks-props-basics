import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />

      <BlogContent articleText="Hello Joel, welcome to Props!"/>
      <Comment commentText="Thanks Joel, I feel welcome here- Joel" />
      <Comment commentText = "Yes, welcome to the club buddy!- Eunice Makena" />
    </div>

  );
}

export default BlogPost;
