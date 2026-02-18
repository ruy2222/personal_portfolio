import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="thankyou-wrapper">
      <div className="thankyou-box">
        <h1>Thank You!</h1>
        <p>Your message has been sent successfully.</p>

        <button onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ThankYou;