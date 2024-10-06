import React from 'react';
import styled from 'styled-components';

const TypeContainer = styled.div`
    font-family: 'Pretendard', sans-serif;
    display: flex;
    padding-top: 2%;
    width: 80%;
    padding-left: 15.8%;
`;

const TypeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2%;
    cursor: pointer;
`;

const TypeText = styled.p`
    color: ${({ isSelected }) => (isSelected ? '#000' : '#666')};
    font-size: 20px;
`;

const Underline = styled.div`
    width: 178%;
    height: 4px;
    background-color: #1F8BFF;
`;

const Bar = ({ selectedType, handleTypeClick }) => {
    return (
    <TypeContainer>
        {['작성일', '인기글', '팔로우'].map(type => (
            <TypeItem key={type} onClick={() => handleTypeClick(type)}>
                <TypeText isSelected={selectedType === type}>{type}</TypeText>
                {selectedType === type && <Underline />}
        </TypeItem>
    ))}
    </TypeContainer>
    );
};

export default Bar;
