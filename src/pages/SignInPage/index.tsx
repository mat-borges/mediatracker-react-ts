import styled from 'styled-components';

export default function SignInPage() {
  return (
    <SignInContainer>
      <h1>Log In</h1>
      <SignInForms>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Senha:
          <input type="password" required />
        </label>
        <button type="submit">Entrar</button>
      </SignInForms>
      <p>Ainda não tem uma conta? Crie uma!</p>
    </SignInContainer>
  );
}

const SignInContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: 660px) {
    width: 100%;
  }
`;

const SignInForms = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: flex;
    flex-direction: column;
    input {
      padding: 0 10px;
      border: 1px solid #000;
      border-radius: 5px;
    }
  }

  button {
    width: fit-content;
    height: fit-content;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }
`;
