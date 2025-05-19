import './Sidebar.css';
import ranLogo from './assets/image.png';

function Sidebar({ bgColor, textColor }) {
  return (
    <aside className="sidebar" style={{ backgroundColor: bgColor }}>
      <div className="sidebar-header">
        <img src={ranLogo} alt="UMC Logo" className="umc-logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li style={{ color: textColor }}>🏠 Dashboard</li>
          <li style={{ color: textColor }}>📊 Analytics</li>
          <li style={{ color: textColor }}>🧑‍💼 User Management</li>
          <li style={{ color: textColor }}>⚙️ Settings</li>
          <li style={{ color: textColor }}>🔍 Search</li>
        </ul>

        <div className="sidebar-bottom">
          <ul>
            <li style={{ color: textColor }}>📨 Messages</li>
            <li style={{ color: textColor }}>🚪 Logout</li>
          </ul>
        </div>
      </nav>
    </aside>

  );
}

export default Sidebar;



import PropTypes from 'prop-types';

Sidebar.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
