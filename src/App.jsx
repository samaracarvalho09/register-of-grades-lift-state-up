
import { useState } from 'react';
// import {Home1} from './liftingUpState/Home1';
import {CadastroListaAluno} from './components/CadastroListaAluno'
import './App.css'
function App() {

  
  return (
    <div style={{backgroundColor:'#4E736E', width: '100vw', height: '100vh', display:'flex', flexDirection:'column', alignItems:'center', paddingTop: '100px'}}>
      {/* <Home1 /> */}
      <CadastroListaAluno />
    </div>
  );
}

export default App;