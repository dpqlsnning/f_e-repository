import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import picture2 from '../img/frame.png';
import picture3 from '../img/eye.png';
import picture4 from '../img/Vector.png';

const HeaderContainer = styled.div`
    font-family: 'Pretendard', sans-serif;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #B3B3B3;
    padding: 2%;
    height: 8vh;
`;

const Logo = styled.div`
    font-size: 2vw;
    font-weight: bold;
    padding-left: 6%;
    font-family: Arial, sans-serif;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
    margin-left: 18%;
    opacity: 0;
`;

const SearchInput = styled.input`
    border: 1px solid #000;
    border-radius: 8px;
    font-size: 15px;
    padding-left: 3%;
    width: 75%;
    height: 70%;
    margin-right: 5px;

    &:focus {
        outline: none;
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 500px #fff inset !important;
    }
`;

const MyPostContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8.5%;
    font-weight: 500;
    font-size: 1.2vw;
    white-space: nowrap;
    cursor: pointer;
`;

const PostForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
`;

const TitleInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    border-bottom: 0.5px solid #000;
    padding-top: 3%;
    padding-bottom: 3%;
    font-size: 28px;

    &::placeholder {
        color: #B3B3B3;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 300px;
    padding-top: 4%;
    padding-left: 0.5%;
    font-size: 18px;
    border: none;
    resize: none;
    outline: none;

    &::placeholder {
        color: #B3B3B3; 
    }
`;

const ButtonGroup = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 96%;
    padding: 2%;
    background-color: #E6E6E6;
`;

const Button = styled.button`
    padding: 0.8% 1.5%;
    margin-left: 1.5%;
    border: 1px solid #000;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${(props) => (props.variant === 'complete' ? '#1F8BFF' : '#fff')};
    color: ${(props) => (props.variant === 'complete' ? '#fff' : '#000')};

    &:hover {
        background-color: ${(props) => (props.variant === '#E0E0E0')};
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(1.5px);
`;

const ModalContent = styled.div`
    font-family: 'Pretendard', sans-serif;
    background-color: #fff;
    width: 30%;
    height: 35%;
    padding: 2%;
    border-radius: 8px;
    position: relative;
    text-align: center;
`;

const CloseButton = styled.button`
    padding-left: 90%;
    background: none;
    border: none;
    font-size: 24px;
    color: gray;
    cursor: pointer;
`;

const ToggleGroup = styled.div`
    width: 100%;
    padding-top: 2%;
    margin: 3% 0;
    font-size: 20px;

    button {
        padding: 2.5% 3%;
        margin: 0 2%;
        background-color: #fff;
        border: none;
        cursor: pointer;
        font-size: 20px;
        padding-bottom: 2%;
        border-bottom: 2px solid transparent; 
        
        &.active {
            border-bottom: 2px solid #000;
        }
    }
`;


const FinalizeButton = styled.button`
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding: 3%;
    margin-left: 18%;
    margin-top: 10%;
    width: 64%;
    border-radius: 8px;
    background-color: #1F8BFF;
    color: #fff;
    border: none;
`;

const MainTitle = styled.button`
    font-size: 26px;
    font-weight: bold;
    padding-top: 6%;
    background-color: #fff;
    border: none;
`;

const Header = ({ setSearchTerm, toggleMenu }) => {
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

    const handleFinalizePost = () => {
        console.log('작성 완료:', { title, content, isPublic });
        setTitle('');
        setContent('');
        setIsModalOpen(false);

        navigate('/post', {
            state: { title, content, date, isPublic },
        });
    };

    const handleLogoClick = () => {
        navigate('/main');
    };

    return (
        <>
            <HeaderContainer>
                <Logo onClick={handleLogoClick}>BamGallary</Logo>
                <SearchContainer>
                    <SearchInput
                        type="text"
                        placeholder="검색어를 입력하세요"
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </SearchContainer>
                <MyPostContainer onClick={toggleMenu}>
                    <p>임시저장된 글 <span> | </span> {username} </p>
                    <img src={picture2} alt="face-symbol" />
                </MyPostContainer>
            </HeaderContainer>
            <PostForm>
                <TitleInput
                    type="text"
                    placeholder="제목을 입력하세요"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextArea
                    placeholder="내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </PostForm>
            <ButtonGroup>
                <Button onClick={handleSaveDraft}>임시 저장</Button>
                <Button variant="complete" onClick={handleCompletePost}>작성 완료</Button>
            </ButtonGroup>

            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={() => setIsModalOpen(false)}>X</CloseButton>
                        <MainTitle>작성을 완료하시겠습니까?</MainTitle>
                        <ToggleGroup>
                            <button onClick={() => setIsPublic(true)} className={isPublic ? 'active' : ''}>
                                <img src={picture3} alt="public icon" width="30%" /> 공개
                            </button>
                            <button onClick={() => setIsPublic(false)} className={!isPublic ? 'active' : ''}>
                                <img src={picture4} alt="private icon" width="18%" /> 비공개
                            </button>
                        </ToggleGroup>
                        <FinalizeButton onClick={handleFinalizePost}>작성 완료</FinalizeButton>
                    </ModalContent>
                </Modal>
            )}
        </>
    );
};

export default Header;
