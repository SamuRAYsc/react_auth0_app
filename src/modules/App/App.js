import './App.css';
import TestPart from '../TestPart/TestPart';
import AccessDenied from '../access-denied';
import NavBar from '../nav-bar.js';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
      </header>
      <NavBar />
      {isAuthenticated ? <TestPart />: <AccessDenied/>}
    </div>
  );
}

export default App;

