import React from 'react';
import './BlogAndNews.css';
import detox from '../../assets/detox.png';
import editor from '../../assets/editor.jpg';

const BlogCard = ({ image, date, title, editorImage, editorName }) => (
  <div className="card">
    <img src={image} alt={title} />
    <div className="content">
      <h5>Medical <span>|</span> {date}</h5>
      <h3>{title}</h3>
      <div className="editor">
        <img src={editorImage} alt={editorName} />
        <h4>{editorName}</h4>
      </div>
    </div>
  </div>
);

const BlogAndNews = () => {
  const blogData = [
    {
      image: detox,
      date: "March 31, 2022",
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      editorImage: editor,
      editorName: "Rebecca Lee"
    },
    {
      image: detox,
      date: "March 31, 2022",
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      editorImage: editor,
      editorName: "Rebecca Lee"
    },
    {
      image: detox,
      date: "March 31, 2022",
      title: "6 Tips To Protect Your Mental Health When You’re Sick",
      editorImage: editor,
      editorName: "Rebecca Lee"
    }
  ];

  return (
    <div className="blog-and-news">
      <h4>Blog & News</h4>
      <h1>Read Our Latest News</h1>
      <div className="blogs">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogAndNews;
