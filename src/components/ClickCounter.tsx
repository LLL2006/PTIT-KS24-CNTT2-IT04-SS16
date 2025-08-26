import React, { Component } from 'react';

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ 
      count: this.state.count + 1 
    });
  }

  render() {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      backgroundColor: '#f8fafc',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
      margin: '20px auto',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    };

    const countStyle = {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '20px',
      textAlign: 'center'
    };

    const labelStyle = {
      fontSize: '18px',
      color: '#6b7280',
      marginBottom: '30px',
      textAlign: 'center'
    };

    const buttonStyle = {
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: '600',
      color: 'white',
      backgroundColor: '#3b82f6',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
    };

    const buttonHoverStyle = {
      ...buttonStyle,
      backgroundColor: '#2563eb',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(59, 130, 246, 0.4)'
    };

    return (
      <div style={containerStyle}>
        <div style={countStyle}>
          {this.state.count}
        </div>
        
        <button 
          style={buttonStyle}
          onClick={this.handleClick}
          onMouseEnter={(e) => {
            Object.assign(e.target.style, buttonHoverStyle);
          }}
          onMouseLeave={(e) => {
            Object.assign(e.target.style, buttonStyle);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}