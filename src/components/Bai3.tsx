import React, { Component } from 'react';

export default class Bai3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredButton: null
    };
  }

  getButtonStyle = (type, isHovered) => {
    const baseStyle = {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      display: 'inline-block',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
      boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none'
    };

    const styles = {
      primary: {
        backgroundColor: isHovered ? '#2563eb' : '#3b82f6',
        color: 'white'
      },
      secondary: {
        backgroundColor: isHovered ? '#4b5563' : '#6b7280',
        color: 'white'
      },
      success: {
        backgroundColor: isHovered ? '#059669' : '#10b981',
        color: 'white'
      },
      warning: {
        backgroundColor: isHovered ? '#d97706' : '#f59e0b',
        color: 'white'
      },
      danger: {
        backgroundColor: isHovered ? '#dc2626' : '#ef4444',
        color: 'white'
      },
      info: {
        backgroundColor: isHovered ? '#0891b2' : '#06b6d4',
        color: 'white'
      },
      light: {
        backgroundColor: isHovered ? '#e5e7eb' : '#f3f4f6',
        color: '#374151',
        border: '1px solid #d1d5db'
      },
      dark: {
        backgroundColor: isHovered ? '#111827' : '#1f2937',
        color: 'white'
      },
      link: {
        backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
        color: isHovered ? '#2563eb' : '#3b82f6',
        textDecoration: isHovered ? 'none' : 'underline'
      }
    };

    return { ...baseStyle, ...styles[type] };
  }

  render() {
    const containerStyle = {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#4a5568',
      borderRadius: '8px',
      flexWrap: 'wrap'
    };

    const { hoveredButton } = this.state;

    return (
      <div style={containerStyle}>
        <button 
          style={this.getButtonStyle('primary', hoveredButton === 'primary')}
        >
          Primary
        </button>
        
        <button 
          style={this.getButtonStyle('secondary', hoveredButton === 'secondary')}
        >
          Secondary
        </button>
        
        <button 
          style={this.getButtonStyle('success', hoveredButton === 'success')}
        >
          Success
        </button>
        
        <button 
          style={this.getButtonStyle('warning', hoveredButton === 'warning')}
        >
          Warning
        </button>
        
        <button 
          style={this.getButtonStyle('danger', hoveredButton === 'danger')}
        >
          Danger
        </button>
        
        <button 
          style={this.getButtonStyle('info', hoveredButton === 'info')}
        >
          Info
        </button>
        
        <button 
          style={this.getButtonStyle('light', hoveredButton === 'light')}
        >
          Light
        </button>
        
        <button 
          style={this.getButtonStyle('dark', hoveredButton === 'dark')}
        >
          Dark
        </button>
        
        <a 
          href="#"
          style={this.getButtonStyle('link', hoveredButton === 'link')}
        >
          Link
        </a>
      </div>
    );
  }
}

