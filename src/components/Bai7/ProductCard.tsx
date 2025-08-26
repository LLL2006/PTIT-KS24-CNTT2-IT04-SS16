import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    const { product, onAddToCart } = this.props;
    
    const cardStyle = {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'transform 0.2s ease',
      cursor: 'pointer'
    };

    const imageStyle = {
      width: '100%',
      height: '200px',
      objectFit: 'contain',
      marginBottom: '12px',
      borderRadius: '8px'
    };

    const nameStyle = {
      fontSize: '16px',
      fontWeight: '600',
      color: '#333',
      marginBottom: '8px',
      lineHeight: '1.4'
    };

    const priceStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#e74c3c',
      marginBottom: '12px'
    };

    const buttonStyle = {
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      padding: '10px 16px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'background-color 0.2s ease'
    };

    return (
      <div 
        style={cardStyle}
        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <img src={product.image} alt={product.name} style={imageStyle} />
        <div style={nameStyle}>{product.name}</div>
        <div style={priceStyle}>{product.price.toLocaleString()} đ</div>
        <button 
          style={buttonStyle}
          onClick={() => onAddToCart(product)}
          onMouseOver={(e) => e.target.style.backgroundColor = '#357abd'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4a90e2'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          Thêm vào giỏ hàng
        </button>
      </div>
    );
  }
}