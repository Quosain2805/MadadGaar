import React from 'react';
import './BlogList.css';

const BlogCard = ({ image, title, body }) => {
  return (
    <div className="blog-card">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <h3>{title}</h3>
        <p>{body}</p>
        <button>Button</button>
      </div>
    </div>
  );
};

const BlogList = () => {
  const blogs = [
    {
        image: require('./assets/blog1.jpg'),// Replace with real image
      title: 'Title',
      body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    },
    {
       image: require('./assets/blog2.jpg'), // Replace with real image
      title: 'Title',
      body: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    },
  ];

  return (
    <div className="blog-list">
      <h1>Our Blogs</h1>
      <p>Visit Our Blogs to get more detail</p>
      {blogs.map((blog, index) => (
        <BlogCard key={index} image={blog.image} title={blog.title} body={blog.body} />
      ))}
    </div>
  );
};

export default BlogList;
