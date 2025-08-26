import React, { Component } from 'react'
import CartItem from './CartItem';

export default class CartPanel extends Component {
  render() {
    const { isOpen, cartItems, onUpdateQuantity, onRemoveItem, totalAmount, onClose } = this.props;
    
    if (!isOpen) return null;

    const panelStyle = {
      position: 'fixed',
      top: 0,
      right: 0,
      backgroundColor: '#1a1a1a',
      width: '400px',
      height: '100vh',
      overflowY: 'auto',
      zIndex: 1000,
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease'
    };

    const headerStyle = {
      backgroundColor: '#ff8c42',
      color: 'white',
      padding: '12px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '18px',
      fontWeight: 'bold'
    };

    const closeButtonStyle = {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '4px',
      borderRadius: '4px'
    };

    const contentStyle = {
      padding: '20px'
    };

    const totalStyle = {
      borderTop: '2px solid #333',
      paddingTop: '16px',
      marginTop: '20px'
    };

    const totalTextStyle = {
      color: 'white',
      fontSize: '18px',
      fontWeight: 'bold'
    };

    return (
      <div style={panelStyle}>
        <div style={headerStyle}>
          <div>Cart</div>
          <button 
            style={closeButtonStyle}
            onClick={onClose}
            onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            ×
          </button>
        </div>
        
        <div style={contentStyle}>
          {cartItems.length === 0 ? (
            <div style={{color: '#888', textAlign: 'center', marginTop: '50px'}}>
              Giỏ hàng trống
            </div>
          ) : (
            <>
              {cartItems.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemoveItem={onRemoveItem}
                />
              ))}
              
              <div style={totalStyle}>
                <div style={totalTextStyle}>
                  Tổng tiền: {totalAmount.toLocaleString()} đ
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}