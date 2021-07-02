import { BrowserRouter, Route, Switch } from 'react-router-dom';//BroserRouter,

import { AuthContextProvider } from './contexts/AuthContext';
import { Deslogado } from './pages/Deslogado';
import { Home } from './pages/Home';
import { Principal } from './pages/Principal';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/principal" exact component={Principal} />
          <Route path="/logar" exact component={Deslogado} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
