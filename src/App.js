import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/Errors/NotFound';
import HomePage from './Pages/HomePage';
import PostPage from './Pages/PostPage';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage />} />
            <Route
                path="/post"
                element={<PostPage />} />
            <Route
                path="*"
                element={<NotFound />} />
        </Routes>
    );
}

export default App;
