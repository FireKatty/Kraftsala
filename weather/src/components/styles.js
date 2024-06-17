// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;
  color: ${(props) => props.theme.text};
  margin: 0;
  overflow: hidden;
  height: 100vh;
  background: url(${(props) => props.img}) no-repeat center center/cover;
  background-color: ${(props) => props.theme.body};
`;

export const WeatherCard = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.cardBackground};
  border-radius: 20px;
  padding: 20px;
  width: 80%;
  max-width: 900px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.text};
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Temp = styled.div`
  font-size: 4rem;
  margin-bottom: 10px;
`;

export const DateAndTime = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const SearchForm = styled.form`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 80px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 5px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 80px;
  width: 40rem;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  background-color: #4caf50;
  color: white;
  border-radius: 80px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ToggleButton = styled.button`
   position: absolute;
  top: 40px;
  right: 30px; /* Align to the right */
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  background-color: ${props => (props.darkMode ? '#333' : '#4caf50')};
  color: white;
  border-radius: 80px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const WeatherDetails = styled.div`
  /* Styles for WeatherDetails */
`;
