
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

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.theme === 'light' ? 'rgba(255, 255, 255, 0)' : 'rgba(0, 0, 0, 0.5)')};
`;

export const WeatherCard = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  padding: 20px;
  max-width: 900px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    top: 60%;
    width: 90%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const DateAndTime = styled.div`
  margin-left: inherit;
  font-size: 1.2rem;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SearchForm = styled.form`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  padding: 5px;
  background-color: ${(props) => props.theme.searchBackground};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    top: 20%;
    width: 90%;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    padding: 8px;
  }
`;

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  border-radius: 80px;
  width: 40rem;
  color: ${(props) => props.theme.searchText};
  background-color: ${(props) => props.theme.searchBackground};

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border-radius: 80px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: ${(props) => props.theme.border};

  @media screen and (max-width: 768px) {
    padding: 12px 24px;
    font-size: 18px;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 40px;
  right: 30px;
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  border-radius: 80px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: ${(props) => props.theme.border};

  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
    padding: 6px 12px;
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export const WeatherDetails = styled.div`
  /* Styles for WeatherDetails */
`;

