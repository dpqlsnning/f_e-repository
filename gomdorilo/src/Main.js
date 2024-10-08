import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header.js';
import Bar from './components/Bar.js';
import PostTable from './components/PostTable.js';
import CreatePost from './components/CreatePost.js';

const Container = styled.div`
    font-family: 'Pretendard', sans-serif;
    width: 100%;
    margin: 0 auto;
`;

const NewPostButtonStyled = styled.button`
    display: flex;
    color: #fff;
    justify-content: center;
    text-align: center;
    background-color: #1F8BFF;
    font-weight: 600;
    font-size: 20px;
    border: none;
    width: 9%;
    padding-top: 1.1%;
    padding-bottom: 1.1%;
    margin-top: -4%;
    margin-left: 75.3%;
    border-radius: 8px;
    white-space: nowrap;
    cursor: pointer;
`;

const Line = styled.div`
    width: 68%;
    height: 1%;
    margin-top: 3%;
    margin-left: 16.2%;
    border: 1px solid #000;
    background-color: #000;
`;

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
        setPosts([...posts, newPost]);
        setFilteredPosts([...posts, newPost]);
    };

    const handlePostSelect = async (id) => {
        const response = await axios.get(`https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app/board/get/${id}`);
        navigate('/post', { state: { post: response.data } });
    };

    const NewPostButton = () => {
        const navigate = useNavigate();
        return (
            <NewPostButtonStyled onClick={() => navigate('/new-post')}>새 글 작성</NewPostButtonStyled>
        );
    };

    return (
        <Container>
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
            <Line />
            <PostTable filteredPosts={filteredPosts} onPostSelect={handlePostSelect} />
            <Routes>
                <Route path="/new-post" element={<CreatePost onPostSubmit={handlePostSubmit} />} />
                <Route path="/post" element={<Main />} /> 
            </Routes>
        </Container>
    );
}

export default Main;
