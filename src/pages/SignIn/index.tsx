import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { MdSend } from 'react-icons/md';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import * as S from './styles';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErros from '../../utils/getValidationErros';

import logoImg from '../../assets/logo-gotoscholl.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErros(error);
          formRef.current?.setErrors(errors);
          return false;
        }
        addToast({
          type: 'success',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <S.Container>
      <S.Content>
        <S.AnimationContainer>
          <img src={logoImg} alt="Logo Brain & Mind" />
          <S.Card>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Seja Bem-Vindo</h1>
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
              <Button type="submit"><MdSend size={16} />Entrar</Button>
              <Link to="/forgot-password">Esqueci a senha</Link>
            </Form>
          </S.Card>
        </S.AnimationContainer>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
