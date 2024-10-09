import React, { useState } from 'react';
import axios from 'axios';
import '../styled_components/SignIn.css'; 
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isNicknameVisible, setIsNicknameVisible] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async () => {
        setErrorMessage('');
        setSuccessMessage('');

        if (!email || !password) {
            setErrorMessage('이메일과 비밀번호를 입력해주세요.');
            return;
        }

        if (isNicknameVisible && !nickname) {
            setErrorMessage('닉네임을 입력해주세요.');
            return;
        }

        if (!isNicknameVisible) {
            setIsNicknameVisible(true);
            return;
        }

        try {
            const response = await axios.post('https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app/members/sign-up', {
                email,
                password,
                nickname
            });

            const token = response.data.token;
            localStorage.setItem('token', token);
            setSuccessMessage('회원가입이 성공적으로 완료되었습니다!');
            navigate('/');
        } catch (error) {
            setErrorMessage('회원가입 실패: ' + (error.response?.data?.message || '서버 오류가 발생했습니다.'));
            console.error('회원가입 실패:', error);
        }
    };

    const handleSignIn = () => {
        navigate('/');
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2 className="signin-title">Sign up</h2>

                {!isNicknameVisible && (
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
                )}

                {!isNicknameVisible && (
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
                )}

                {isNicknameVisible && (
                    <div className="input-field">
                        <input
                            type="text"
                            className="input"
                            placeholder="닉네임 입력"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            required
                        />
                    </div>
                )}

                {errorMessage && (
                    <div className="error-message" style={{ color: 'red', margin: '10px 0' }}>
                        {errorMessage}
                    </div>
                )}

                {successMessage && (
                    <div className="success-message" style={{ color: 'green', margin: '10px 0' }}>
                        {successMessage}
                    </div>
                )}

                <button className="signin-button" onClick={handleSignUp}>
                    {isNicknameVisible ? '완료' : '회원가입'}
                </button>

                <button className="sign-in-button" onClick={handleSignIn}>로그인하기</button>
            </div>
        </div>
    );
};

export default SignIn;
