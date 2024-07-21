import { GoogleLogin, googleLogout } from "@react-oauth/google";
import "./Login.css";
function Login() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  // function success() {
  //   return (
  //     <>
  //       <div>Already logined</div>
  //     </>
  //   );
  // }
  return (
    <div className="login-container">
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      <button type="button" onClick={() => googleLogout()}>
        Logout
      </button>
    </div>
  );
}
export default Login;
