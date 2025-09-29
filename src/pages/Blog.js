import React, { useState, useEffect, useCallback } from 'react';
import BlogCard from '../components/BlogCard';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('/data/blogs.json');
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts');
      }
      const data = await response.json();
      setBlogs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterBlogs = useCallback(() => {
    let filtered = [...blogs];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog =>
        blog.category === selectedCategory
      );
    }

    // Tag filter
    if (selectedTag !== 'All') {
      filtered = filtered.filter(blog =>
        blog.tags.includes(selectedTag.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [blogs, searchTerm, selectedCategory, selectedTag]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [filterBlogs]);

  const getUniqueCategories = () => {
    const categories = blogs.map(blog => blog.category);
    return ['All', ...new Set(categories)];
  };

  const getAllTags = () => {
    const allTags = blogs.flatMap(blog => blog.tags);
    const uniqueTags = [...new Set(allTags)];
    return ['All', ...uniqueTags];
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedTag('All');
  };

  if (loading) {
    return (
      <div className="blog-page">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-page">
        <div className="container">
          <div className="error">
            <h2>Error Loading Blog Posts</h2>
            <p>{error}</p>
            <button onClick={fetchBlogs} className="btn btn-primary">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">
            Stay updated with the latest insights, tips, and wellness advice
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="blog-layout">
          {/* Left Column - Blog Content */}
          <div className="main-content">
            <div className="content-header">
              <span className="results-count">
                {filteredBlogs.length} post{filteredBlogs.length !== 1 ? 's' : ''} found
              </span>
            </div>

            {/* Blog Posts Grid */}
            {filteredBlogs.length > 0 ? (
              <div className="blog-grid">
                {filteredBlogs.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-icon">📝</div>
                <h3>No blog posts found</h3>
                <p>Try adjusting your search criteria or filters</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="newsletter-signup">
              <div className="newsletter-content">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for the latest wellness tips and updates</p>
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

          {/* Right Sidebar - Filters */}
          <div className="sidebar">
            <div className="sidebar-content">
              <h3 className="sidebar-title">Filter Posts</h3>
              
              {/* Search Section */}
              <div className="filter-section">
                <h4 className="filter-title">Search</h4>
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </div>
              
              {/* Category Filter */}
              <div className="filter-section">
                <h4 className="filter-title">Category</h4>
                <div className="filter-options">
                  {getUniqueCategories().map(category => (
                    <button
                      key={category}
                      className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tags Filter */}
              <div className="filter-section">
                <h4 className="filter-title">Tags</h4>
                <div className="filter-options">
                  {getAllTags().map(tag => (
                    <button
                      key={tag}
                      className={`filter-btn ${selectedTag === tag ? 'active' : ''}`}
                      onClick={() => handleTagChange(tag)}
                    >
                      {tag === 'All' ? tag : `#${tag}`}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Filter Actions */}
              <div className="filter-actions">
                <button onClick={clearFilters} className="btn btn-outline">
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
