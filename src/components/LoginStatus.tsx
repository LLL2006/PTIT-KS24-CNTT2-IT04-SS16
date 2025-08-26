import React, { Component } from 'react';

export default class LoginStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLogin = () => {
    this.setState(prev => ({ isLoggedIn: !prev.isLoggedIn }));
  };

  render() {
    const { isLoggedIn } = this.state;

    const containerStyle = {
      backgroundColor: "#f0f8ff",
      padding: "20px",
      borderRadius: "10px",
      width: "300px",
      margin: "20px auto",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
    };

    const textStyle = {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "20px"
    };

    const buttonStyle = {
      backgroundColor: "#1976d2",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold"
    };

    return (
      <div style={containerStyle}>
        <div style={textStyle}>
          {isLoggedIn ? "✅ Xin chào, User!" : "🔒 Vui lòng đăng nhập để tiếp tục."}
        </div>
        <button style={buttonStyle} onClick={this.toggleLogin}>
          {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>
      </div>
    );
  }
}
