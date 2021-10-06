import { P2PEngine } from './base/Engine';
import { NavController } from './base/NavController';
import { PreloadPage } from './page/PreloadPage';
import { StartPage } from './page/StartPage';
import './base/index'

function App() {
  return (
    <P2PEngine width={960} height={540}>
      <NavController enter="preload">
        <PreloadPage id="preload" next="start"/>
        <StartPage id="start"/>
      </NavController>
    </P2PEngine>
  );
}

export default App;
