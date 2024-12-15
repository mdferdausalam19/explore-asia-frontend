import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const SocialSign = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div>
        <button onClick={() => handleSocialLogin(googleSignIn)} className="btn">
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialSign;
