import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
    font-family: 'Pretendard', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #E6E6E6;
`;

const LoginBox = styled.div`
    background-color: #fff;
    box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.2);
    padding: 2%;
    width: 60%;
    height: 65%;
`;

const LoginTitle = styled.h2`
    text-align: center;
    font-size: 70px;
    font-weight: 600;
    margin-bottom: 4%;
    margin-top: 8%;
    color: #1F8BFF;
`;

const InputField = styled.div`
    margin-bottom: 3%;
`;

const Input = styled.input`
    margin-left: 28%;
    width: 40%;
    padding: 2%;
    border: none;
    border-bottom: 1.5px solid #000;
    font-size: 14px;

    &::placeholder {
        color: #B3B3B3;
    }
`;

const LoginButton = styled.button`
    margin-left: 28%;
    width: 44%;
    margin-top: 2.5%;
    padding: 2.4%;
    background-color: #1F8BFF;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: #0056b3;
    }
`;

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/main'); 
    };

    return (
        <LoginContainer>
            <LoginBox>
                <LoginTitle>Login</LoginTitle>
                <div className="login-margin">
                    <InputField>
                        <Input
                            type="text"
                            id="username"
                            value={username}
                            placeholder="아이디 입력"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </InputField>
                    <InputField>
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="비밀번호 입력"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </InputField>
                    <LoginButton onClick={handleLogin}> 로그인 </LoginButton>
                </div>
            </LoginBox>
        </LoginContainer>
    );
};

export default Login;
