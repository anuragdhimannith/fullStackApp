import React from 'react';
import { Container, Form, FormContent, FormH1, FormLabel, FormInput, FormWrap, Icon , Text, FormButton} from '../Signin/SigninElement';

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to = "/"> React </Icon>
                    <FormContent>
                        <Form action = '#'>
                            <FormH1> Sign up for new account </FormH1>
                            <FormLabel htmlFor = 'for'> First Name </FormLabel>
                            <FormInput type = 'text' required />
                            <FormLabel htmlFor = 'for'> Last Name </FormLabel>
                            <FormInput type = 'text' required />
                            <FormLabel htmlFor = 'for'> Date of Birth </FormLabel>
                            <FormInput type = 'text' required />
                            <FormLabel htmlFor = 'for'> Password </FormLabel>
                            <FormInput type = 'password' required />
                            <FormLabel htmlFor = 'for'>Confirm Password </FormLabel>
                            <FormInput type = 'password' required />
                            <FormButton type = 'submit'> Continue </FormButton>
                            <Text> Forgot Password </Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignUp;