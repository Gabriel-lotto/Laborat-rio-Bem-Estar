import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormH1, FormLabel, FormButton } from './SignupElements'

const SignUp = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Lab Bem Estar</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Preencha os campos para realizar cadastro</FormH1>
              <FormLabel htmlFor='for'>Email:</FormLabel>
                <FormInput htmlFor='email' required />
              <FormLabel htmlFor='for'>Senha:</FormLabel>
                <FormInput htmlFor='password' required />
              <FormLabel htmlFor='for'>CPF:</FormLabel>
                <FormInput htmlFor='cpf' required />
              <FormLabel htmlFor='for'>Telefone:</FormLabel>
                <FormInput htmlFor='telefone' required />
              <FormLabel htmlFor='for'>Nome Completo:</FormLabel>
                <FormInput htmlFor='nome' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignUp
