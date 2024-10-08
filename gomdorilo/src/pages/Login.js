import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled_components/Login.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/main'); 
    };

    const handleSignIn = () => {
        navigate('/signin');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login</h2>
                <div className="login-margin">
                    <div className="input-field">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            className="input"
                            placeholder="이메일 입력"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            className="input"
                            placeholder="비밀번호 입력"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="login-button" onClick={handleLogin}>로그인</button>
                    <button className="sign-in-button" onClick={handleSignIn}>회원가입하기</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
