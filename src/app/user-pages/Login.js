import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";
import { login } from "../services/user"; // Assicurati di avere il percorso corretto per il tuo file di servizi

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, error: "" });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    try {
      this.setState({ loading: true });
      const userId = await login(username, password);
      localStorage.setItem("isLogin", true);
      localStorage.setItem("userId", userId);
      this.props.history.push("/dashboard");
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  };

  render() {
    const { username, password, error, loading } = this.state;

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f4f6f5",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src="https://www.attivacostruzioni.it/wp-content/uploads/2020/07/logo-attiva-costruzioni-menu.jpg"
              alt="Attiva Costruzioni"
              style={{
                height: "60px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h4 style={{ margin: 0, color: "#2e7d32", fontWeight: "600" }}>
              Benvenuto!
            </h4>
            <p style={{ color: "#777", fontSize: "14px", marginTop: "4px" }}>
              Accedi per continuare
            </p>
          </div>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Control
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
                placeholder="Username"
                style={{
                  borderRadius: "30px",
                  padding: "12px 20px",
                  fontSize: "15px",
                  border: "1px solid #ccc",
                }}
              />
            </Form.Group>

            <Form.Group style={{ marginBottom: "16px" }}>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
                style={{
                  borderRadius: "30px",
                  padding: "12px 20px",
                  fontSize: "15px",
                  border: "1px solid #ccc",
                }}
              />
            </Form.Group>

            {error && (
              <div
                style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}
              >
                {error}
              </div>
            )}

            <div style={{ marginBottom: "16px" }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  backgroundColor: "#2e7d32",
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "30px",
                  textAlign: "center",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                {loading ? "Attendere..." : "Accedi"}
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
