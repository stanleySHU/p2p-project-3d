import { P2PEngine } from './base/Engine';
import { NavController } from './base/tab/NavController';
import { PreloadPage } from './page/PreloadPage';
import { StartUpPage } from './page/StartUpPage';
import './base/index'
import { LobbyPage } from './page/LobbyPage';

function App() {
  return (
    <P2PEngine width={960} height={540}>
      <NavController enter="preload">
        <PreloadPage id="preload" next="startUp"/>
        <StartUpPage id="startUp" next="lobby"/>
        <LobbyPage id="lobby"/>
      </NavController>
    </P2PEngine>
  );
}

export default App;
