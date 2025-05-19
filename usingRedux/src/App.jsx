import './index.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { useSelector } from 'react-redux';

function App() {
  const bgColor = useSelector(state => state.bgColor);
  const textColor = useSelector(state => state.textColor);

  return (
    <div className="app-container">
      <Sidebar bgColor={bgColor} textColor={textColor} />
      <div className="main-content">
        <Header bgColor={bgColor} textColor={textColor} />
        <div className="content-area" style={{ backgroundColor: bgColor, paddingTop: '150px' }}>
          <MainContent bgColor={bgColor} textColor={textColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
