import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styled_components/SignIn.css';

const SignIn = () => {
    const [password, setPassword] = useState('');
    const confirmPassword = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        if (password !== confirmPassword) {
            return;
        }
        navigate('/signin'); 
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2 className="signin-title">Sign In</h2>
                <div className="signup-margin">
                    <div className="input-field">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            className="input"
                            placeholder="이메일 입력"
                            onChange={(e) => setEmail(e.target.value)}
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
                    <button className="signin-button" onClick={handleSignIn}> 로그인 </button>
                    <button className="signup-button" onClick={handleSignUp}> 회원가입하기 </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
