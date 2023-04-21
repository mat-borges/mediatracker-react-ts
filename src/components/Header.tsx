import { accentColor, darkSecondaryColor, fontColor, inputBackColor } from '../constants/colors';

import { FaUser } from 'react-icons/fa';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <LeftBox>
        <img src={logo} />
        <h1>MediaTracker</h1>
      </LeftBox>
      <SearchBar>
        <input type="text" placeholder="Pesquisar" />
      </SearchBar>
      <RightBox>
        <h1>Mídias</h1>
        <h1>Wishlist</h1>
        <div>
          <FaUser size={'50'} color={fontColor} />
        </div>
      </RightBox>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${darkSecondaryColor};
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  cursor: pointer;
  img {
    width: 5rem;
    margin: 0 1rem;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.35));
  }

  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
    font-family: 'Orbitron', sans-serif;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const SearchBar = styled.div`
  width: 40%;
  input {
    width: 100%;
    height: 3.2rem;
    padding: 0.6rem;
    border: none;
    border-radius: 1.2rem;
    font-size: 1.2rem;
    background-color: ${inputBackColor};
    caret-color: ${accentColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    :focus {
      outline: 2px solid ${accentColor};
    }
    ::placeholder {
      font-size: 1rem;
    }
  }
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-right: 2rem;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 3.7rem;
    height: 3.7rem;
    margin-right: 1rem;
    padding-top: 0.1rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${accentColor};
  }
`;
