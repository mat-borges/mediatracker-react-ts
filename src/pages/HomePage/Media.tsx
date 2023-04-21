import { fontColor } from '../../constants/colors';
import mockedImage from '../../assets/images/the-flash.webp';
import styled from 'styled-components';

export default function Media() {
  return (
    <MediaContainer>
      <CheckBoxContainer>
        <MediaInfos>
          <img src={mockedImage} />
          <h1>The Flash (2014)</h1>
          <h2>S01E01</h2>
          <h3>Série</h3>
        </MediaInfos>
        <Checkbox />
        <Checkmark></Checkmark>
      </CheckBoxContainer>
    </MediaContainer>
  );
}

const MediaContainer = styled.div`
  display: flex;
  height: fit-content;
  padding: 0 0.4rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const CheckBoxContainer = styled.label`
  display: block;
  position: relative;
  width: 100%;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 0.7rem;
  height: 0.7rem;
  background-color: ${fontColor};
  &:hover {
    background-color: #ccc;
  }
  input:checked ~ & {
    background-color: #ccc;
  }
  &:after {
    display: none;
    position: absolute;
    content: '';
  }
  input:checked ~ &:after {
    display: block;
  }
  &:after {
    top: -3px;
    left: 4px;
    width: 3px;
    height: 10px;
    border: solid green;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
  }
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const MediaInfos = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 2.8rem;
    object-fit: cover;
  }
`;
