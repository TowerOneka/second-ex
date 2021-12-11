import "./App.scss";
import PlaylistContainer from "./components/PlaylistContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemsContainer from "./components/ItemsContainer";
import HeaderContainer from "./components/HeaderContainer";

let App = () => {
  return (
    <>
      <div className='container'>
        <Router>
          <HeaderContainer />
          <Routes>
            <Route exact path='/' element={<PlaylistContainer />} />

            <Route path='/items/:itemId' element={<ItemsContainer />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
