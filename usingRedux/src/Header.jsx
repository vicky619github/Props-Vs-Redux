import './header.css';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBgColor, setTextColor } from './redux/actions';

function Header({ bgColor, textColor }) {
  const dispatch = useDispatch();
  // const bgColor = useSelector((state) => {
  //   console.log("colour change:",state)
  //   return state.bgColor;
  // });
  // const textColor = useSelector(state => state.textColor);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [tempBgColor, setTempBgColor] = useState(bgColor);
  const [tempTextColor, setTempTextColor] = useState(textColor);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const openSettings = () => {
    setModalVisible(true);
    setDropdownVisible(false);
  };

  const handleSave = () => {
    dispatch(setBgColor(tempBgColor));
    dispatch(setTextColor(tempTextColor));
    setModalVisible(false);
  };

  const handleCancel = () => {
    setTempBgColor(bgColor);
    setTempTextColor(textColor);
    setModalVisible(false);
  };


  return (
    <>
      <header className="header" style={{ backgroundColor: bgColor }}>
        <input type="text" placeholder="🤖 How can I help you (BETA version)?" />
        <button id="Language" style={{ color: textColor }} >🌐 En</button>

        <div className="user-menu">
          <button onClick={toggleDropdown} className="user-button" style={{ color: textColor }}>
            👥 Users
          </button>
          {dropdownVisible && ( //Shown when dropdownVisible is true.
            <div className="dropdown-menu">
              <button className="dropdown-item">Profile</button>
              <button className="dropdown-item">Location</button>
              <button className="dropdown-item" onClick={openSettings}>
                Settings
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Modal for Color Settings */}
      {modalVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Customize Sidebar Colors</h2>

            <label>Background Color:</label>

            {/* <ColorPicker
              value={tempBgColor}
              onChange={(color) => setTempBgColor(color.toHexString())}
            />
            <br /><br />

            <label>Text Color:</label>
            <ColorPicker
              value={tempTextColor}
              onChange={(color) => setTempTextColor(color.toHexString())}
            /> */}

            <input
              type="color"
              value={tempBgColor}
              onChange={(e) => setTempBgColor(e.target.value)}
            />

            <label>Text Color:</label>
            <input
              type="color"
              value={tempTextColor}
              onChange={(e) => setTempTextColor(e.target.value)}
            />
            <br /><br />

            <div className="modal-buttons">
              <button onClick={(e) => handleSave(e)}>Save</button> {/*  Todo  */}
              <button onClick={(e) => handleCancel(e)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;


import PropTypes from 'prop-types';

Header.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  setBgColor: PropTypes.func.isRequired,
  setTextColor: PropTypes.func.isRequired,
};


