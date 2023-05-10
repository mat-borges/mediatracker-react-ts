import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import GlobalStyle from './assets/styles/GlobalStyle';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MediaPage/MoviePage';
import SeriesPage from './pages/MediaPage/SeriesPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/media" element={<SeriesPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
