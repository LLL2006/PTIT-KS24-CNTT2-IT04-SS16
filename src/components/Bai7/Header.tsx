import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { cartCount, onToggleCart } = this.props;
    
    const headerStyle = {
      backgroundColor: '#ff8c42',
      color: 'white',
      padding: '12px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1001 // Higher than cart panel
    };

    const navStyle = {
      display: 'flex',
      gap: '30px'
    };

    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer'
    };

    const cartStyle = {
      backgroundColor: '#e74c3c',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      padding: '6px 12px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '14px',
      fontWeight: '600'
    };

    return (
      <div style={headerStyle}>
        <div style={navStyle}>
          <a href="#" style={linkStyle}>Trang chủ</a>
          <a href="#" style={linkStyle}>Danh sách sản phẩm</a>
        </div>
        <button style={cartStyle} onClick={onToggleCart}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
          {cartCount}
        </button>
      </div>
    );
  }
}