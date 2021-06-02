import React from 'react';
import ScrollToTop from '../components/ScrollToTop';
import SignIn from '../components/Signin';
import SignUp from '../components/Signup';

const SigninPage = () => {
    return (
        <>
            <ScrollToTop/>
            <SignIn/>
          {/* <SignUp/> */}
        </>
    );
};

export default SigninPage;