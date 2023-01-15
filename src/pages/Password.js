import { Link } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Password() {

  var email = "legado9842@themesw.com"

  const auth = getAuth();
  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent to " + email)
  }

    return (
      <div className="Contact">
        <header className="App-header">
        <h1 className="password">Password</h1>
        <input type="text" placeholder="E-Mail"/>
        &nbsp;
        <button className="button-password"  onClick={triggerResetEmail}>Reset</button>
        &nbsp;
        <Link className="App-link" to="/login"> Remembered your password? </Link>
        </header>
      </div>
    );
  }
  
  export default Password;