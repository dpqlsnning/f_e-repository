import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styled_components/Nickname.css';

const Nickname = () => {
    const [nickname, setNickname] = useState('');
    const [nicknameStatus, setNicknameStatus] = useState('닉네임을 입력하세요.');
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate();

    const usedNicknames = ['Jin_venus08', 'JohnDoe', '홍길동'];

    const handleNicknameChange = (e) => {
        const newNickname = e.target.value;
        setNickname(newNickname);

        if (!newNickname.trim()) {
            setNicknameStatus('닉네임을 입력하세요.');
            setIsAvailable(false);
        } else if (usedNicknames.includes(newNickname)) {
            setNicknameStatus('이미 사용중인 닉네임입니다.');
            setIsAvailable(false);
        } else {
            setNicknameStatus('사용 가능한 닉네임입니다.');
            setIsAvailable(true);
        }
    };

    const handleSubmit = () => {
        if (!nickname.trim()) {
            setNicknameStatus('닉네임을 입력하세요.');
        } else if (isAvailable) {
            console.log('Nickname submitted:', nickname);
            navigate('/');
        }
    };

    const handleSignIn = () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Sign up</h1> 

                <div className="input-field">
                    <input
                        type="text"
                        placeholder="홍길동"
                        value={nickname}
                        onChange={handleNicknameChange}
                    />
                </div>

                <div
                    className="nickname-status"
                    style={{
                        color: nicknameStatus === '이미 사용중인 닉네임입니다.' || nicknameStatus === '닉네임을 입력하세요.' ? 'red' : '#B3B3B3',
                        marginLeft: '12%',
                        marginTop: '2%',
                    }}
                >
                    {nicknameStatus}
                </div>

                <button
                    className="login-button"
                    onClick={handleSubmit}
                    style={{
                        backgroundColor: isAvailable ? '#1F8BFF' : '#999',
                        cursor: isAvailable ? 'pointer' : 'not-allowed',
                    }}
                >
                    완료
                </button>

                <button 
                    className="sign-in-button" 
                    onClick={handleSignIn}
                >
                    로그인하기
                </button>
            </div>
        </div>
    );
};

export default Nickname;
