import React, { Component } from 'react';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: '',
      error: '',
      showResult: false,
      submittedData: {
        name: '',
        email: '',
        age: ''
      }
    };
  }

  handleInputChange = (field, value) => {
    this.setState({
      [field]: value,
      error: '' 
    });
  }

  handleSubmit = () => {
    const { name, email, age } = this.state;
    
    if (!email.includes('@')) {
      this.setState({
        error: 'Email không hợp lệ',
        showResult: false
      });
      return;
    }
    
    if (parseInt(age) < 0) {
      this.setState({
        error: 'Tuổi không được âm',
        showResult: false
      });
      return;
    }
    
    this.setState({
      error: '',
      showResult: true,
      submittedData: {
        name,
        email,
        age
      }
    });
  }

  handleClearAll = () => {
    this.setState({
      name: '',
      email: '',
      age: '',
      error: '',
      showResult: false,
      submittedData: {
        name: '',
        email: '',
        age: ''
      }
    });
  }

  render() {
    const containerStyle = {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    };

    const headerStyle = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333'
    };

    const iconStyle = {
      marginRight: '10px',
      fontSize: '18px'
    };

    const inputStyle = {
      width: '100%',
      padding: '12px',
      marginBottom: '15px',
      backgroundColor: '#00d4ff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      color: '#333',
      boxSizing: 'border-box'
    };

    const inputStyleEmpty = {
      ...inputStyle,
      color: '#666'
    };

    const buttonContainerStyle = {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px'
    };

    const buttonStyle = {
      padding: '10px 20px',
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    };

    const errorStyle = {
      display: 'flex',
      alignItems: 'center',
      color: '#e74c3c',
      fontSize: '14px',
      marginTop: '10px'
    };

    const warningIconStyle = {
      marginRight: '8px',
      fontSize: '16px'
    };

    const resultContainerStyle = {
      backgroundColor: '#e3f2fd',
      borderLeft: '4px solid #2196f3',
      padding: '15px',
      borderRadius: '6px',
      marginTop: '20px'
    };

    const resultHeaderStyle = {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333'
    };

    const checkIconStyle = {
      marginRight: '8px',
      color: '#4caf50',
      fontSize: '16px'
    };

    const resultItemStyle = {
      marginBottom: '8px',
      fontSize: '14px',
      color: '#555'
    };

    return (
      <div style={containerStyle}>
        <div style={headerStyle}>
          <span style={iconStyle}>📋</span>
          Nhập thông tin người dùng
        </div>

        <input
          type="text"
          placeholder="Họ tên"
          value={this.state.name}
          onChange={(e) => this.handleInputChange('name', e.target.value)}
          style={this.state.name ? inputStyle : inputStyleEmpty}
        />

        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.handleInputChange('email', e.target.value)}
          style={this.state.email ? inputStyle : inputStyleEmpty}
        />

        <input
          type="number"
          placeholder="Tuổi"
          value={this.state.age}
          onChange={(e) => this.handleInputChange('age', e.target.value)}
          style={this.state.age ? inputStyle : inputStyleEmpty}
        />

        <div style={buttonContainerStyle}>
          <button 
            style={buttonStyle}
            onClick={this.handleSubmit}
            onMouseOver={(e) => e.target.style.backgroundColor = '#357abd'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4a90e2'}
          >
            Gửi
          </button>
          
          <button 
            style={{...buttonStyle, marginLeft: 'auto'}}
            onClick={this.handleClearAll}
            onMouseOver={(e) => e.target.style.backgroundColor = '#357abd'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4a90e2'}
          >
            Xóa tất cả
          </button>
        </div>

        {this.state.error && (
          <div style={errorStyle}>
            <span style={warningIconStyle}>⚠️</span>
            {this.state.error}
          </div>
        )}

        {this.state.showResult && (
          <div style={resultContainerStyle}>
            <div style={resultHeaderStyle}>
              <span style={checkIconStyle}>✅</span>
              Thông tin đã nhập:
            </div>
            <div style={resultItemStyle}>
              Họ tên: {this.state.submittedData.name}
            </div>
            <div style={resultItemStyle}>
              Email: {this.state.submittedData.email}
            </div>
            <div style={resultItemStyle}>
              Tuổi: {this.state.submittedData.age}
            </div>
          </div>
        )}
      </div>
    );
  }
}
