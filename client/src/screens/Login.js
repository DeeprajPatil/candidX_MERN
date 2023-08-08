import React from 'react';
import {Link} from 'react-router-dom';
import styles from './login1.module.css'; // Import the CSS file

const Login = () => {

  return (
    <div className={styles.login}>
      <div>
      <form>
        <button type="submit" className={styles.continuewithgoogle}>
          Connect with Google 
        </button>
        <button type="submit" className={styles.continuewithfacebook}>
          Connect with Facebook 
        </button>
      </form>
      </div>
      <p classname={styles.ortext}>or</p>
      <div>
        <form>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.email}
          placeholder="Enter your e-mail"
        />
        <input
          type="password"
          id="password"
          name="password"
          className={styles.password}
          placeholder="Enter your password"
        />
        <button type="submit" className={styles.signin}>
          Sign In
        </button>
        </form>
      </div>
      <div className={styles.donthavean}>dont have an account ?</div>
      <b className={styles.createaaccount}><Link to="./Signup">Sign up</Link></b>
      
    </div>
  )
};

export default Login;
