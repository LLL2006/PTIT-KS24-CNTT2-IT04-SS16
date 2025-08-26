import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const { item, onUpdateQuantity, onRemoveItem } = this.props;
    
    const itemStyle = {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #444',
      gap: '12px'
    };

    const imageStyle = {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #555'
    };

    const infoStyle = {
      flex: 1,
      color: 'white'
    };

    const nameStyle = {
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '4px'
    };

    const controlsStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    };

    const buttonStyle = {
      width: '28px',
      height: '28px',
      borderRadius: '4px',
      border: '1px solid #555',
      backgroundColor: 'transparent',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    const quantityStyle = {
      color: 'white',
      fontSize: '14px',
      minWidth: '20px',
      textAlign: 'center'
    };

    const deleteStyle = {
      ...buttonStyle,
      backgroundColor: '#e74c3c',
      border: 'none'
    };

    return (
      <div style={itemStyle}>
        <img src={item.image} alt={item.name} style={imageStyle} />
        <div style={infoStyle}>
          <div style={nameStyle}>{item.name}</div>
        </div>
        <div style={controlsStyle}>
          <button 
            style={buttonStyle}
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
          <span style={quantityStyle}>{item.quantity}</span>
          <button 
            style={buttonStyle}
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
          >
            -
          </button>
          <button 
            style={deleteStyle}
            onClick={() => onRemoveItem(item.id)}
          >
            🗑️
          </button>
        </div>
      </div>
    );
  }
}