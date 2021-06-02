import React from 'react';
import { Container, Form,SocialSignInButton, FormContent, FormH1, FormLabel, FormInput, FormWrap, Icon , Text, FormButton} from './SigninElement';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookSquare } from 'react-icons/fa';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to = "/"> React </Icon>
                    <FormContent>
                        <Form action = '#'>
                            <FormH1> Sign in to your account </FormH1>
                            <FormLabel htmlFor = 'for'> Email </FormLabel>
                            <FormInput type = 'email' required />
                            <FormLabel htmlFor = 'for'> Password </FormLabel>
                            <FormInput type = 'password' required />
                            <FormButton type = 'submit'> Continue </FormButton>
                            <SocialSignInButton> <FcGoogle/> Continue with google </SocialSignInButton>
                            <SocialSignInButton> <FaFacebookSquare/> Continue with facebook </SocialSignInButton>
                            <Text> Forgot Password </Text>
                           </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;