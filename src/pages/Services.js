import React, { useState, useEffect, useCallback } from 'react';
import ServiceCard from '../components/ServiceCard';
import PriceRangeModal from '../components/PriceRangeModal';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [showPriceRangeModal, setShowPriceRangeModal] = useState(false);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch('/data/services.json');
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await response.json();
      setServices(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterServices = useCallback(() => {
    let filtered = [...services];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service =>
        service.category === selectedCategory
      );
    }

    // Price range filter
    if (priceRange !== 'All') {
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace('₹', '').replace(',', ''));
        switch (priceRange) {
          case 'Under ₹2000':
            return price < 2000;
          case '₹2000 - ₹3000':
            return price >= 2000 && price <= 3000;
          case 'Above ₹3000':
            return price > 3000;
          default:
            return true;
        }
      });
    }

    setFilteredServices(filtered);
  }, [services, searchTerm, selectedCategory, priceRange]);

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    filterServices();
  }, [filterServices]);

  const getUniqueCategories = () => {
    const categories = services.map(service => service.category);
    return ['All', ...new Set(categories)];
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  const handleOpenPriceRangeModal = () => {
    setShowPriceRangeModal(true);
  };

  const handleClosePriceRangeModal = () => {
    setShowPriceRangeModal(false);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setPriceRange('All');
  };



  if (loading) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading services...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="services-page">
        <div className="container">
          <div className="error">
            <h2>Error Loading Services</h2>
            <p>{error}</p>
            <button onClick={fetchServices} className="btn btn-primary">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="services-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Discover our range of professional services designed to meet your needs
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="services-layout">
          {/* Left Sidebar - Filters */}
          <div className="sidebar">
            <div className="sidebar-content">
              <h3 className="sidebar-title">Filter Services</h3>
              
              {/* Search Section */}
              <div className="filter-section">
                <h4 className="filter-title">Search</h4>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </div>
              
              {/* Category Filter */}
              <div className="filter-section">
                <h4 className="filter-title">All Category</h4>
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
              
              {/* Price Range Filter */}
              <div className="filter-section">
                <h4 className="filter-title">Price Range</h4>
                <button 
                  className="price-range-btn"
                  onClick={handleOpenPriceRangeModal}
                >
                  {priceRange === 'All' ? 'All Prices' : priceRange}
                  <span className="btn-arrow">▼</span>
                </button>
              </div>
              
              {/* Filter Actions */}
                         </div>
          </div>

          {/* Right Column - Services Content */}
          <div className="main-content">
            <div className="content-header">
              <span className="results-count">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>

            {/* Services Grid */}
            {filteredServices.length > 0 ? (
              <div className="services-grid">
                {filteredServices.map(service => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No services found</h3>
                <p>Try adjusting your search criteria or filters</p>
                <button onClick={clearFilters} className="btn btn-primary">
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Call to Action */}
            <div className="services-cta">
              <div className="cta-content">
                <h2>Can't find what you're looking for?</h2>
                <p>Contact us to discuss your specific needs and we'll create a custom solution for you.</p>
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Price Range Modal */}
      <PriceRangeModal
        isOpen={showPriceRangeModal}
        onClose={handleClosePriceRangeModal}
        onApply={handlePriceRangeChange}
        currentRange={priceRange}
      />
    </div>
  );
};

export default Services;
