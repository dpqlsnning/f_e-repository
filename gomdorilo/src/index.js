import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Main from './Main.js';
import CreatePost from './components/CreatePost.js'; 
import Post from './components/Post.js'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/new-post" element={<CreatePost />} /> 
            <Route path="/post" element={<Post />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </Router>
);
