import { P2PEngine } from './base/Engine';
import { NavController } from './base/tab/NavController';
import { PreloadPage } from './page/PreloadPage';
import { StartUpPage, LoadGamePage } from './page/LoadingPage';
import './base/index'
import { LobbyPage } from './page/LobbyPage';
import { GamePage } from './page/GamePage';
import '@babylonjs/loaders/glTF';

function App() {
  return (
    <P2PEngine width={960} height={540}>
      <NavController enter="preload">
        <PreloadPage id="preload" next="startUp"/>
        <StartUpPage id="startUp"/>
        <LobbyPage id="lobby"/>
        <LoadGamePage id="loadGame"/>
        <GamePage id="game"/>
      </NavController>
    </P2PEngine>
  );
}

export default App;
