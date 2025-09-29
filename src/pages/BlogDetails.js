import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const fetchBlogDetails = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/data/blogs.json');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      const blogs = await response.json();
      const foundBlog = blogs.find(b => b.id === parseInt(id));
      
      if (!foundBlog) {
        throw new Error('Blog post not found');
      }
      
      setBlog(foundBlog);
      
      // Get related blogs (same category, excluding current blog)
      const related = blogs
        .filter(b => b.id !== foundBlog.id && b.category === foundBlog.category)
        .slice(0, 3);
      setRelatedBlogs(related);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBlogDetails();
  }, [fetchBlogDetails]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="blog-details-page">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-details-page">
        <div className="container">
          <div className="error">
            <h2>Error Loading Blog Post</h2>
            <p>{error}</p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-details-page">
        <div className="container">
          <div className="error">
            <h2>Blog Post Not Found</h2>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/blog" className="breadcrumb-link">Blog</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{blog.title}</span>
        </nav>

        {/* Article Header */}
        <article className="blog-article">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-date">{formatDate(blog.date)}</span>
              <span className="article-category">{blog.category}</span>
            </div>
            
            <h1 className="article-title">{blog.title}</h1>
            
            <div className="article-tags">
              {blog.tags.map((tag, index) => (
                <span key={index} className="article-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="article-image">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="featured-image"
            />
          </div>

          {/* Article Content */}
          <div className="article-content">
            <div className="content-section">
              <h2>Introduction</h2>
              <p className="article-excerpt">{blog.excerpt}</p>
            </div>
            
            <div className="content-section">
              <h2>Full Article</h2>
              <div className="article-body">
                {blog.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="article-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="article-footer">
            <div className="article-actions">
              <button className="action-btn">
                <span className="action-icon">👍</span>
                Like
              </button>
              <button className="action-btn">
                <span className="action-icon">💬</span>
                Comment
              </button>
              <button className="action-btn">
                <span className="action-icon">📤</span>
                Share
              </button>
            </div>
            
            <div className="article-navigation">
              <Link to="/blog" className="btn btn-outline">
                ← Back to Blog
              </Link>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        {relatedBlogs.length > 0 && (
          <section className="related-posts">
            <h2 className="related-title">Related Posts</h2>
            <div className="related-grid">
              {relatedBlogs.map(relatedBlog => (
                <div key={relatedBlog.id} className="related-card">
                  <div className="related-image">
                    <img 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title}
                      className="related-img"
                    />
                  </div>
                  <div className="related-content">
                    <h3 className="related-card-title">
                      <Link to={`/blog/${relatedBlog.id}`} className="related-link">
                        {relatedBlog.title}
                      </Link>
                    </h3>
                    <p className="related-excerpt">{relatedBlog.excerpt}</p>
                    <div className="related-meta">
                      <span className="related-date">{formatDate(relatedBlog.date)}</span>
                      <span className="related-category">{relatedBlog.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter Signup */}
        <div className="newsletter-signup">
          <div className="newsletter-content">
            <h2>Enjoyed this article?</h2>
            <p>Subscribe to our newsletter for more wellness tips and insights</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
