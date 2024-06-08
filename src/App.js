import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PostsList from './components/Posts/PostsList';
import AddPostForm from "./components/Posts/AddPostForm"
import SinglePostPage from "./components/Posts/SinglePostPage"
import EditPostForm from "./components/Posts/EditPostForm"
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<PostsList />} />
          <Route path="post">
            <Route index element={<AddPostForm />} />
            <Route path=":postId" element={<SinglePostPage />} />
            <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
