import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Dropdown.js';
import Bar from '../components/Bar.js';
import PostTable from './PostTable.js';
import CreatePost from './CreatePost.js';
import '../styled_components/Main.css'; 

function Main() {
    const location = useLocation();
    const username = location.state?.username || 'Guest';
    const [searchTerm, setSearchTerm] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState('작성일');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app/board`);
                setPosts(response.data);
                setFilteredPosts(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchPosts();
    }, []);

    const handleSearch = () => {
        const results = posts.filter(post => post.title.includes(searchTerm));
        setFilteredPosts(results);
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
        if (type === '작성일') {
            setFilteredPosts([...posts].sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else if (type === '인기글') {
            setFilteredPosts([...posts].sort((a, b) => b.recommendations - a.recommendations));
        } else {
            setFilteredPosts(posts);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handlePostSubmit = (newPost) => {
        setPosts(prevPosts => [...prevPosts, newPost]);
        setFilteredPosts(prevPosts => [...prevPosts, newPost]);
    };

    const handlePostSelect = async (id) => {
        const response = await axios.get(`https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app/board/get/${id}`);
        navigate('/post', { state: { post: response.data } });
    };

    const NewPostButton = () => (
        <button className="new-post-button" onClick={() => navigate('/new-post')}>새 글 작성</button>
    );

    return (
        <div className="main-container">
            <Header 
                username={username} 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                handleSearch={handleSearch} 
                isMenuOpen={isMenuOpen} 
                toggleMenu={toggleMenu} 
            />
            <Bar 
                selectedType={selectedType} 
                handleTypeClick={handleTypeClick} 
            />
            <NewPostButton />
            <div className="line" />
            <PostTable filteredPosts={filteredPosts} onPostSelect={handlePostSelect} />
            <Routes>
                <Route path="/new-post" element={<CreatePost onPostSubmit={handlePostSubmit} />} />
                <Route path="/post" element={<Main />} /> 
            </Routes>
        </div>
    );
}

export default Main;
