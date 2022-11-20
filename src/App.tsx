import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import './reset.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Main from 'pages/Main';
import ApplicationForm from 'pages/matching/ApplicationForm';
import CommunityDetail from 'pages/community/CommunityDetail';
import CommunityWriting from 'pages/community/CommunityWriting';
import CommunityList from 'pages/community/CommunityList';
import CommunityEdit from 'pages/community/CommunityEdit';
import Login from 'pages/user/Login';
import RegistForm from 'pages/user/regist/RegistForm';
import MRUserSignup from 'pages/user/regist/MRUserSignup';
import CUserSignup from 'pages/user/regist/CUserSignup';
import axios from 'axios';

function App() {

  const [isLogin, setIsLogin] = useState(false); 

  function loginCallback(login: any) {
    setIsLogin(login);
  }

  useEffect(() => {

  //   try{
  //     let data = {email: "devracoon@naver.com"};
  //     axios.post("/auth/refreshToken" ,JSON.stringify(data), {
  //         headers: {
  //           "Content-Type": `application/json`,
  //         }})
  //     .then(res =>{
  //         console.log("res.data.accessToken : " + res.data);
  //         axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
  //         setIsLogin(true);
          
  //     })
  //     .catch(ex=>{
  //         console.log("app silent requset fail : " + ex);
  //     })
  //     .finally(()=>{
  //       console.log("login request end");
  //       setLoading(true);
  //     });
  // }catch(e){
  //     console.log(e);
  // }
},[]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<RegistForm />} />
        <Route path="/signup/user" element={<MRUserSignup />} />
        <Route path="/signup/user-c" element={<CUserSignup />} />
        <Route path="/app" element={<ApplicationForm />} />
        <Route path="/community" element={<CommunityList />} />
        <Route path="/communityEdit/:questionBoardId" element={<CommunityEdit />} />
        <Route path="/community-qna/:questionBoardId" element={<CommunityDetail />} />
        <Route path="/community-write" element={<CommunityWriting />} />

      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;