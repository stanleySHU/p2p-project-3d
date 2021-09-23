import React from 'react';
import logo from './logo.svg';
import { P2PEngine } from './component/Engine';
import { NavController } from './component/NavController';
import { PreloadPage } from './page/PreloadPage';

function App() {
  return (
    <div className="App">
      <P2PEngine width={960} height={540}>
        <NavController enter="preload">
          <PreloadPage id="preload"/>
        </NavController>
      </P2PEngine>
    </div>
  );
}

export default App;
