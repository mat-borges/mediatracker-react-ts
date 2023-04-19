import styled from 'styled-components';

export default function SignUpPage() {
  return (
    <SignInContainer>
      <h1>Cadastro</h1>
      <SignInForms onSubmit={(e) => e.preventDefault()}>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Senha:
          <input type="password" required />
        </label>
        <label>
          Confirmar Senha:
          <input type="password" required />
        </label>
        <label>
          Nome:
          <input type="text" required />
        </label>
        <label>
          Sobrenome:
          <input type="text" required />
        </label>
        <label>
          Aniversário:
          <input type="date" />
        </label>
        <label>
          Avatar (url):
          <input type="url" required />
        </label>
        <button type="submit">Cadastrar</button>
      </SignInForms>
      <p>Já possui cadastro? Login</p>
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
  width: fit-content;

  label {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      margin-top: 2px;
      padding: 5px 10px;
      border: 1px solid #000;
      border-radius: 5px;
    }
  }

  button {
    width: fit-content;
    height: fit-content;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }
`;
