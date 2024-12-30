import { useNavigate } from "react-router";
import useAuth from "../../features/auth/useAuth";

const SocialSignIn = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const handleSocialSignIn = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <div>
        <button
          onClick={() => handleSocialSignIn(googleSignIn)}
          className="btn"
        >
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialSignIn;
