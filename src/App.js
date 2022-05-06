import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import BooksPage from './pages/BooksPage';
import Header from './components/Header';
import BorrowedBooksPage from './pages/BorrowedBooksPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/borrowed" element={<BorrowedBooksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
