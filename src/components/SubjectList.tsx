import React, { Component } from 'react'

export default class SubjectList extends Component {
  subjects: string[] = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];

  render() {
    const containerStyle: React.CSSProperties = {
      backgroundColor: "#1e1e1e",
      minHeight: "100vh",
      padding: "20px",
    };

    const titleStyle: React.CSSProperties = {
      color: "white",
      fontSize: "2rem",
      marginBottom: "20px",
      fontWeight: "bold",
    };

    const listStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    };

    const itemStyle: React.CSSProperties = {
      backgroundColor: "#dff6ff",
      color: "#004085",
      padding: "15px",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "18px",
    };

    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>📚 Danh sách môn học</h1>
        <div style={listStyle}>
          {this.subjects.map((subject, index) => (
            <div key={index} style={itemStyle}>
              {subject}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

