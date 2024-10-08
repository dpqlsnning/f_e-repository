import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled_components/CreatePost.css'; 
import picture2 from '../img/frame.png';
import picture3 from '../img/eye.png';
import picture4 from '../img/Vector.png';
import axios from 'axios';

const CreatePost = ({ setSearchTerm, toggleMenu }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username] = useState('Jin_venus08');
    const [isPublic, setIsPublic] = useState(true); 
    const [date] = useState('2024.10.01');
    
    const navigate = useNavigate();

    const handleSaveDraft = () => {
        console.log('임시 저장:', { title, content });
    };

    const handleCompletePost = () => {
        if (!title) {
            alert('제목을 입력해주세요.');
            return;
        }
        if (!content) {
            alert('내용을 입력해주세요.');
            return;
        }
        setIsModalOpen(true);
    };

    const handleFinalizePost = async () => {
        if (!title) {
            alert('제목을 입력해주세요.');
            return;
        }
        if (!content) {
            alert('내용을 입력해주세요.');
            return;
        }

        const postData = {
            title: title,
            content: content,
        };

        try {
            const response = await axios.post('https:/https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app/board/save', postData);
            console.log('게시글 저장 성공:', response.data);

            setTitle('');
            setContent('');
            setIsModalOpen(false);

            navigate('/post', {
                state: { title, content, date, isPublic },
            });
        } catch (error) {
            console.error('게시글 저장 실패:', error);
        }
    };

    const handleLogoClick = () => {
        navigate('/main');
    };

    return (
        <>
            <header className="header-container">
                <div className="logo" onClick={handleLogoClick}>BamGallary</div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        onChange={e => setSearchTerm(e.target.value)}
                        id = "nope"
                    />
                </div>
                <div className="my-post-container" onClick={toggleMenu}>
                    <p>임시저장된 글 <span> | </span> {username} </p>
                    <img src={picture2} alt="face-symbol" />
                </div>
            </header>
            <div className="post-form">
                <input
                    type="text"
                    className="title-input"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="text-area"
                    placeholder="내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="button-group">
                <button className="button save" onClick={handleSaveDraft}>임시 저장</button>
                <button className="button complete" onClick={handleCompletePost}>작성 완료</button>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setIsModalOpen(false)}>X</button>
                        <h2 className="main-title">작성을 완료하시겠습니까?</h2>
                        <div className="toggle-group">
                            <button onClick={() => setIsPublic(true)} className={isPublic ? 'active' : ''}>
                                <img src={picture3} alt="public icon" width="30%" /> 공개
                            </button>
                            <button onClick={() => setIsPublic(false)} className={!isPublic ? 'active' : ''}>
                                <img src={picture4} alt="private icon" width="18%" /> 비공개
                            </button>
                        </div>
                        <button className="finalize-button" onClick={handleFinalizePost}>작성 완료</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreatePost;
