import aleLogo from './assets/Capture.PNG'; // adjust path if needed
import PropTypes from 'prop-types';

function MainContent({ textColor }) {
  return (
    <section className="content" >
      <div className="content-wrapper">
        <p className="welcome-message" style={{ color: textColor }}>Welcome Vicky, you are connected as user</p>
        <div className="content-inner">
          <p className="warning-message" style={{ color: textColor }}>
          Horizon is currently in early access. Please proceed only if you are part of our trusted preview group.
          </p>
          <img src={aleLogo} alt="ALE_Logo" className="ALE-logo" />
          <p style={{ color: textColor }}>Access to Horizon services</p>
          <form className="login-form">
            <input type="text" placeholder="Enter your OXE account login" />
            <input type="password" placeholder="Enter your OXE account password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default MainContent;

MainContent.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

