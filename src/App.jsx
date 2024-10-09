import Bubbles from './components/Bubbles';
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';
import './styles/app.scss';

function App() {
  return (
    <div className="appp">
      <Toolbar />
      <SettingBar />
      <Canvas />
      <Bubbles />
    </div>
  );
}

export default App;
