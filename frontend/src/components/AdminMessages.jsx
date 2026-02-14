import React, { useEffect, useState } from "react";

function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/contact")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  }, []);

  const checkPassword = () => {
    if (password === "admin123") { // set your password
      setShowTable(true);
    } else {
      alert("Wrong password!");
    }
  };

  if (!showTable) {
    return (
      <div style={{ padding: "40px", color: "#fff", background: "#0d0d0d", minHeight: "100vh" }}>
        <h2>Enter Admin Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button onClick={checkPassword} style={{ padding: "10px" }}>Submit</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", color: "#fff", background: "#0d0d0d", minHeight: "100vh" }}>
      <h2>All Messages</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #fff" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #fff" }}>
            <th style={{ padding: "10px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Message</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {messages.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ padding: "10px", textAlign: "center" }}>No messages yet.</td>
            </tr>
          ) : (
            messages.map((msg) => (
              <tr key={msg._id} style={{ borderBottom: "1px solid #fff" }}>
                <td style={{ padding: "10px" }}>{msg.name}</td>
                <td style={{ padding: "10px" }}>{msg.email}</td>
                <td style={{ padding: "10px" }}>{msg.message}</td>
                <td style={{ padding: "10px" }}>{new Date(msg.createdAt).toLocaleString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminMessages;
