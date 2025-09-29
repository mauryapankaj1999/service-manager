import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  const { id, title, excerpt, image, tags, category, date } = blog;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="blog-card">
      <div className="blog-image-container">
        <img 
          src={image} 
          alt={title}
          className="blog-image"
          loading="lazy"
        />
        <div className="blog-category">
          {category}
        </div>
      </div>
      
      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-date">{formatDate(date)}</span>
          <span className="blog-category-tag">{category}</span>
        </div>
        
        <h3 className="blog-title">
          <Link to={`/blog/${id}`} className="blog-title-link">
            {title}
          </Link>
        </h3>
        
        <p className="blog-excerpt">{excerpt}</p>
        
        <div className="blog-tags">
          {tags.map((tag, index) => (
            <span key={index} className="blog-tag">
              #{tag}
            </span>
          ))}
        </div>
        
        <Link to={`/blog/${id}`} className="blog-read-more">
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;


