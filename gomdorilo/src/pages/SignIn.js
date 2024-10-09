import React, { useState } from 'react';
import axios from 'axios';
import '../styled_components/SignIn.css'; 
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password,
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/main');
        } catch (error) {
            console.error('로그인 실패:', error);
        }
    };

    const handleSignUp = () => {
        navigate('/nickname');
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2 className="signin-title">Sign up</h2>
                <div className="input-field">
                    <input
                        type="email"
                        className="input"
                        placeholder="이메일 입력"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        className="input"
                        placeholder="비밀번호 입력"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="signin-button" onClick={handleSignUp}>회원가입</button>
                <button className="sign-in-button" onClick={handleSignIn}>로그인하기</button>
            </div>
        </div>
    );
};

export default SignIn;
