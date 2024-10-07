import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import picture2 from '../img/frame.png';
import styled from 'styled-components';

const PostContainer = styled.div`
    font-family: 'Pretendard', sans-serif;
    width: 100%;
    height: 100%;
    margin: 0;
`;

const Header = styled.header`
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
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
    margin-left: 18%;
`;

const SearchInput = styled.input`
    border: 1px solid #000;
    border-radius: 8px;
    font-size: 15px;
    padding: 10px;
    width: 75%;
    margin-right: 5px;

    &:focus {
        outline: none;
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 500px #fff inset !important;
    }
`;

const MyPost = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8.5%;
    font-weight: 500;
    font-size: 1.2vw;
    white-space: nowrap;
    cursor: pointer;

    span {
        color: #B3B3B3;
    }
`;

const PostForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
`;

const TitleShow = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    margin-top: 3%;
    font-size: 28px;
    background: transparent;

    &::read-only {
        background: transparent;
    }
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 300px;
    padding: 20px 0.5%;
    font-size: 18px;
    border: none;
    resize: none;
    outline: none;
`;

const CommentTextarea = styled.textarea`
    width: 96.5%;
    height: 200px;
    margin-top: 4%;
    padding: 20px 0.5%;
    background-color: #f0f0f0;
    border-radius: 12px;
    font-size: 18px;
    border: 1px solid #E6E6E6;
    padding-left: 3%;
    resize: none;
    outline: none;

    &::placeholder {
        color: #666; 
    }
`;

const Divider = styled.hr`
    width: 100%;
    border: 0.6px solid #000;
    margin: 20px 0;
`;

const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    font-size: 18px;
    padding-left: 5%;
    width: 100%;
    margin: 30px 0;
`;

const AuthorDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const AuthorImage = styled.img`
    margin-right: 6%;
    width: 10%;
    height: 4%;
    border-radius: 50%;
`;

const FollowButton = styled.button`
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    padding: 6%;
    width: 70%;
    border-radius: 5px;
    cursor: pointer;
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
    background-color: white;
    width: 30%;
    height: 30%;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
`;

const ModalText = styled.p`
    padding: 2%;
    margin-top: 13%;
    font-size: 24px;
    font-weight: 600;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    cursor: pointer;
`;

const EditButton = styled(Button)`
    width: 14%;
    font-size: 22px;
    margin-top: 3%;
    border-radius: 8px;
    color: #fff;
    background-color: #999;
`;

const DeleteButton = styled(Button)`
    margin-left: 2%;
    margin-top: 3%;
    width: 14%;
    font-size: 22px;
    border-radius: 8px;
    color: #fff;
    background-color: #FF1F1F; 
`;

const ModalDeleteButton = styled(Button)`
    width: 20%; 
    margin-left: 2%;
    font-size: 16px;
    border-radius: 5px;
    color: #fff; 
    background-color: #FF1F1F;
    margin-top: 3%;
`;

const CancelButton = styled(Button)`
    width: 20%;
    font-size: 16px;
    border-radius: 5px;
    background-color: #999;
    color: #fff;
`;

const Post = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { title = '', content = '' } = location.state || {};

    const [titleState] = useState(title);
    const [contentState] = useState(content);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleEdit = () => {
        navigate('/new-post', {
            state: { title: titleState, content: contentState },
        });
    };

    const handleDelete = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        navigate('/'); 
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <PostContainer>
            <Header>
                <Logo>BamGallary</Logo>
                <SearchContainer>
                    <SearchInput
                        id="search-bar"
                        type="text"
                        placeholder="검색어를 입력하세요"
                        style={{ opacity: 0 }}
                    />
                </SearchContainer>
                <MyPost>
                    <p>내 게시물 <span> | </span> Jin_venus08 </p>
                    <img src={picture2} alt="face-symbol" className="face-icon" />
                </MyPost>
            </Header>
            <PostForm>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TitleShow value={titleState} readOnly />
                    <EditButton onClick={handleEdit}>수정</EditButton>
                    <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
                </div>
                <Divider />
                <Textarea value={contentState} readOnly />
                <Divider />
                <AuthorInfo>
                    <div style={{ textAlign: 'center' }}>
                        추천
                        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>0</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        댓글
                        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>0</div>
                    </div>
                    <AuthorDetails>
                        <p>작성자: Jin_venus08</p>
                        <FollowButton>팔로우</FollowButton>
                    </AuthorDetails>
                    <AuthorImage src={picture2} alt="author" />
                </AuthorInfo>
                <Divider />
                <CommentTextarea placeholder="댓글 작성" />
            </PostForm>
            {isModalOpen && (
                <Modal>
                    <ModalContent>
                        <ModalText>이 글을 삭제하시겠습니까?</ModalText>
                        <CancelButton onClick={cancelDelete}>취소</CancelButton>
                        <ModalDeleteButton onClick={confirmDelete}>삭제</ModalDeleteButton>
                    </ModalContent>
                </Modal>
            )}
        </PostContainer>
    );
}

export default Post;
