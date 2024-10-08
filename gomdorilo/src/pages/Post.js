import React, { useState } from 'react';
import Header from '../components/Header.js';
import { useLocation, useNavigate } from 'react-router-dom'; 
import picture2 from '../img/frame.png';
import axios from 'axios';
import '../styled_components/Post.css';

const Post = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { id = '', title = '', content = '' } = location.state || {};

    const [titleState, setTitleState] = useState(title);
    const [contentState, setContentState] = useState(content);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEdit = () => {
        navigate('/new-post', {
            state: { 
                title: titleState, 
                content: contentState,
                id: id
            },
        });
    };

    const handleDelete = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app/board/delete/${id}`);
            navigate('/');
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    const updatePost = async () => { //eslint-disable-line no-unused-vars
        try {
            await axios.put(`https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app/board/update`, {
                id: id,
                title: titleState,
                content: contentState,
            });
            navigate('/');
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    return (
        <div className="post-container">
            <Header 
                username="Jin_venus08" 
            />
            <div className="post-form">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                        className="title-show" 
                        value={titleState} 
                        readOnly 
                        onChange={(e) => setTitleState(e.target.value)}
                    />
                    <button className="edit-button" onClick={handleEdit}>수정</button>
                    <button className="delete-button" onClick={handleDelete}>삭제</button>
                </div>
                <hr className="divider" />
                <textarea 
                    className="textarea" 
                    value={contentState} 
                    readOnly 
                    onChange={(e) => setContentState(e.target.value)}
                />
                <hr className="divider" />
                <div className="author-info">
                    <div style={{ textAlign: 'center' }}>
                        추천
                        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>0</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        댓글
                        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>0</div>
                    </div>
                    <div className="author-details">
                        <p>작성자: Jin_venus08</p>
                        <button className="follow-button">팔로우</button>
                    </div>
                    <img src={picture2} alt="face-symbol" className="author-image" />
                </div>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <p className="modal-text"> 이 글을 삭제하시겠습니까?</p>
                        <button className="cancel-button" onClick={cancelDelete}>취소</button>
                        <button className="modal-delete-button" onClick={confirmDelete}>삭제</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Post;
