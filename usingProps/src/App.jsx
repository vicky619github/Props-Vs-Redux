import './index.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState();
  const [textColor, setTextColor] = useState();

  return (
    <div className="app-container">
      <Sidebar bgColor={bgColor} textColor={textColor} />
      <div className="main-content" >
        <Header
          bgColor={bgColor}
          textColor={textColor}
          setBgColor={setBgColor}
          setTextColor={setTextColor}
        />
        <div className="content-area" style={{ backgroundColor: bgColor , paddingTop: '150px'}}>
          <MainContent bgColor={bgColor} textColor={textColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
