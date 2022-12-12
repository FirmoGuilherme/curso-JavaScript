import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {

  const nome = "Leo"
  return (
    <div className="App">
      {/* <h1>Testando CSS</h1> */}
      {/* <HelloWorld />
      <SayMyName nome='Firmo'/>
      <SayMyName nome='Lucas'/>
      <SayMyName nome={nome} />
      <Pessoa 
      nome= "Firmo" 
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150" /> */}
      <List />
    </div>
  );
}

export default App;
