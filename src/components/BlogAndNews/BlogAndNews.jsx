import React from 'react';
import './BlogAndNews.css';
import detox from '../../assets/detox.png';
import editor from '../../assets/editor.jpg';

const BlogCard = ({ image, date, title, editorImage, editorName }) => (
  <div className="card">
    <img srcSet="" src={image} alt={title} />
    <div className="content">
      <h5 className="content-heading-small">
        Medical <span className="content-heading-small-span">|</span> {date}
      </h5>
      <h3 className="content-heading-large">{title}</h3>
      <div className="editor">
        <img srcSet="" className="content-editor-img" src={editorImage} alt={editorName} />
        <h4 className="content-editor-name">{editorName}</h4>
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
      <h4 className="blog-and-news-heading-small">Blog & News</h4>
      <h1 className="blog-and-news-heading-large">Read Our Latest News</h1>
      <div className="blogs">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogAndNews;
