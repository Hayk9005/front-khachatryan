import "./App.scss";
import Header from "./Components/Header/Header";
import NavMenu from "./Components/NavMenu/NavMenu";
import CardSection from "./Components/CardSection/CardSection";


function App() {

  return (
    <div className="App">
      <Header />
      <div>
        <NavMenu />
        <CardSection />
      </div>
    </div>
  );
}


export default App;
