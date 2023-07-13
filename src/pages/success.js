import CreditScoreIcon from "@mui/icons-material/CreditScore";
import "../styles/success.css";
export const Success = () => {
  return (
    <div className="mainContainer">
      <span>Thank You!</span>
      <CreditScoreIcon fontSize="inherit" className="icon" />
      <h2>Payment Successful</h2>
      <p>Please allow 2-3 days to process and ship your order.</p>
    </div>
  );
};
