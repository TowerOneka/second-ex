import "./App.scss";
import PlaylistContainer from "./components/PlaylistContainer";
import ItemsContainer from "./components/ItemsContainer";
import HeaderContainer from "./components/HeaderContainer";
import { Route, Switch } from "react-router-dom";

let App = () => {
  return (
    <div className='container'>
      <HeaderContainer />
      <Switch>
        <Route path='/' exact>
          <PlaylistContainer />
        </Route>
        <Route path='/items/:itemId'>
          <ItemsContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
