import Title from "./components/Titele/title";
import Input from "./components/Block/block"
import Area from "./components/Area/Area_text";
import "./App.css"

function App() {
  return (
      <div className="App">
        <Title text={'SWAPI'} type='primary'/>
        <Input main_address={'https://swapi.dev/api/'} add_address={'people/1/'} button={'Get info'}/>
        <Area filter={'people'} counter={'2'} object={'salut'}></Area>
      </div>
  );
}

export default App;
