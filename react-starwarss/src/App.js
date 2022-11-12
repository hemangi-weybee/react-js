import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CardDetailPage from "./pages/CardDetailPage";
import CardPage from "./pages/CardPage";
import HomePage from "./pages/HomePage";
import { store } from "./reduxHelper/store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/:type/:id' element={<CardDetailPage />} />
        <Route path='/:type' element={<CardPage />} />
        <Route path='*' element={<CardPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
