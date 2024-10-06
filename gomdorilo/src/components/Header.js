import React from 'react';
import styled from 'styled-components';
import picture1 from '../img/material-symbols_search.png';
import picture2 from '../img/frame.png';

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
    -webkit-tap-highlight-color: transparent;
`;

const SearchInput = styled.input`
    border: 1px solid #000;
    border-radius: 8px;
    font-size: 15px;
    padding-left: 3%;
    width: 75%;
    height: 70%;
    margin-right: 5px;
    cursor: pointer;
    
    &:focus {
        outline: none;
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 500px #fff inset !important;
    }
`;

const SearchIcon = styled.img`
    display: flex;
    width: 3.5%;
    height: 30%;
    margin-left: -43px;
    align-items: center;
    cursor: pointer;
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

const FaceIcon = styled.img`
    margin-left: 5px;
`;

const DropdownMenu = styled.div`
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 10;
    margin-top: 5px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
`;

const DropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const Header = ({ username, searchTerm, setSearchTerm, handleSearch, isMenuOpen, toggleMenu }) => {
    return (
        <HeaderContainer>
            <Logo>
                <p>BamGallary</p>
            </Logo>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="검색어를 입력하세요"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <SearchIcon
                    src={picture1}
                    alt="search-symbol"
                    onClick={handleSearch}
                />
            </SearchContainer>
            <MyPostContainer onClick={toggleMenu}>
                <p>내 게시물 <span> | </span> {username} </p>
                <FaceIcon src={picture2} alt="face-symbol" />
            </MyPostContainer>
            {isMenuOpen && (
                <DropdownMenu>
                    <ul>
                        <DropdownItem>내 정보</DropdownItem>
                        <DropdownItem>내 게시글</DropdownItem>
                        <DropdownItem>임시 저장</DropdownItem>
                        <DropdownItem>로그아웃</DropdownItem>
                    </ul>
                </DropdownMenu>
            )}
        </HeaderContainer>
    );
};

export default Header;
