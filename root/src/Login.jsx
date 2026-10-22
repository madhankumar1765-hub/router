
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <style>
        {`
          h1 {
            color: blue;
          }

          button {
            background-color: blue;
            color: white;
            padding: 10px;
            border: none;
            cursor: p ointer;
          }

          button:hover {
            background-color: green;
          }
        `}
      </style>

      <h1>Login Page</h1>

      <button onClick={() => navigate("/about")}>
        Go to About Page
      </button>
    </div>
  );
}

export default Login;


