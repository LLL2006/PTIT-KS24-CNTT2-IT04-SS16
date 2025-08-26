import React, { Component } from 'react';

export default class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }

  toggleTheme = () => {
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  }

  render() {
    const { isDarkMode } = this.state;

    const lightTheme = {
      backgroundColor: '#ffffff',
      color: '#333333'
    };

    const darkTheme = {
      backgroundColor: '#2d3748',
      color: '#ffffff'
    };

    const containerStyle = {
      ...(isDarkMode ? darkTheme : lightTheme),
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      transition: 'all 0.3s ease'
    };

    const titleStyle = {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    };

    const buttonStyle = {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
    };

    const buttonHoverStyle = {
      backgroundColor: '#2563eb',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.4)'
    };

    return (
      <div style={containerStyle}>
        <div style={titleStyle}>
          <span>{isDarkMode ? '🌙' : '☀️'}</span>
          {isDarkMode ? 'Chế độ Tối đang bật' : 'Chế độ Sáng đang bật'}
        </div>
        
        <button 
          style={buttonStyle}
          onClick={this.toggleTheme}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, buttonStyle);
          }}
        >
          Chuyển theme
        </button>
      </div>
    );
  }
}

