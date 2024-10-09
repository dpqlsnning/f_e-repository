import React, { useState } from 'react';
import axios from 'axios';
import '../styled_components/SignIn.css'; 
import { useNavigate } from 'react-router-dom';

// Axios 인스턴스 생성 및 기본 설정
const axiosInstance = axios.create({
    baseURL: 'https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app',
    timeout: 5000, // 타임아웃을 5000ms로 설정
    headers: {
        'Content-Type': 'application/json', // Content-Type을 JSON으로 설정
    },
});

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const response = await axiosInstance.post('/board', {
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

    const handleSignUp = async () => {
        try {
            // 회원가입 요청을 위한 API 엔드포인트를 확인하세요.
            const response = await axiosInstance.post('/signup', {
                email,
                password,
            });
            console.log('회원가입 성공:', response.data);
            navigate('/main'); // 회원가입 후 이동할 경로
        } catch (error) {
            console.error('회원가입 실패:', error);
        }
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                <h2 className="signin-title">Login</h2>
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

export default Login;
