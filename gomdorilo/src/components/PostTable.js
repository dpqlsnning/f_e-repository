import React from 'react';
import styled from 'styled-components';

const PostsContainer = styled.div`
    font-family: 'Pretendard', sans-serif;
    width: 100%;
`;

const StyledTable = styled.table`
    width: 68%;
    margin-left: 16%;
    font-size: 18px;
    text-align: left;
    border-collapse: collapse; 
`;

const TableHead = styled.thead`
    th {
        position: relative;
        font-size: 20px;
        font-weight: medium; 
        padding-top: 2.5%;
        padding-bottom: 2.5%;
        color: #000;
        padding-left: 2%;

        &::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 110%;
            height: 1px;
            background-color: #999; 
        }
    }
`;

const TableBody = styled.tbody`
    tr {
        position: relative;
        padding-left: 3%;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100.5%;
            height: 1px;
            background-color: #999; 
        }
    }
`;

const TableCell = styled.td`
    padding: 2%;
    border: none; 
    font-weight: 400;
    white-space: nowrap;

    &:nth-child(5) {
        text-align: center;
    }
`;

const TitleColumn = styled(TableCell)`
    padding-right: 1%;
`;

const AuthorColumn = styled(TableCell)`
    text-align: center;
    padding-left: 2%; 
`;

const DateColumn = styled(TableCell)`
    text-align: center;
    color: #999;
`;

const PostTable = ({ filteredPosts }) => {
    return (
        <PostsContainer>
            <StyledTable>
                <TableHead>
                    <tr>
                        <th>no</th>
                        <th className="title-column">제목</th>
                        <th className="author-column">작성자</th>
                        <th className="date-column">작성일</th>
                        <th>추천</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {filteredPosts.map((post, index) => (
                        <tr key={index}>
                            <TableCell>{post.no}</TableCell>
                            <TitleColumn>{post.title}</TitleColumn>
                            <AuthorColumn>{post.author}</AuthorColumn>
                            <DateColumn>{post.date}</DateColumn>
                            <TableCell>{post.recommendations}</TableCell>
                        </tr>
                    ))}
                </TableBody>
            </StyledTable>
        </PostsContainer>
    );
};

export default PostTable;
