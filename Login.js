import React, { useState,useRef } from 'react';
import NaverLogin from 'react-naver-login';
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';

function Login() {
  // 로그인 유지
  const [cookies, setCookie, removeCookie] = useCookies(['loginCookie']);
  const [keepLogin, setkeepLogin] = useState(false);
  const keepLoginHandler = ({ target }) => {
    setkeepLogin(!keepLogin);
  };
  
  // 구글 로그인
  const onClickGoogle = (res) => {}
  
  // 카카오 로그인
  const onClickKakao = (res) => {}
  
  // 네이버 로그인
  const onClickNaver = (res) => {}
  
  // 로그인 실패
  const onLoginFailure = (err) => {
    console.log(err);
  }  
  
  return(
        <>
          <KakaoLogin
            token={''}
            render={renderProps => (
              <div className="kakao" onClick={renderProps.onClick}>
                <img className="kakaoLogo" src="" />
                <div className="kakaoText">카카오 계정으로 로그인</div>
              </div>
            )}
            onSuccess={result => onClickKakao(result)}
            onFailure={onLoginFailure}
            getProfile={true}
          />
              
          <GoogleLogin
            clientId={''}
            render={renderProps => (
              <div className="google" onClick={renderProps.onClick}>
                <img className="googleLogo" src=""/>
                <div className="googleText">구글 계정으로 로그인</div>
              </div>
            )}
            onSuccess={result => onClickGoogle(result)}
            onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'}
          />  
          
          <NaverLogin
              clientId=""
              callbackUrl=""
              render={renderProps => (
                <div className="naver" onClick={renderProps.onClick}>
                  <img className="naverLogo" src=""/>
                  <div className="naverText">네이버 계정으로 로그인</div>
                </div>
              )}
              onSuccess={result => onClickNaver(result)}
              onFailure={onLoginFailure}
           />
       </>
  
  )
}
