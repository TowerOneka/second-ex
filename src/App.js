import "./App.scss";
import PlaylistContainer from "./components/PlaylistContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemsContainer from "./components/ItemsContainer";
import HeaderContainer from "./components/HeaderContainer";

let App = () => {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <HeaderContainer />
          <Routes>
            <Route exact path='/' element={<PlaylistContainer />} />

            <Route path='/items/:itemId' element={<ItemsContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
