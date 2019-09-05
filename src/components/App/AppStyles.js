import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(321.67deg, #7D4DAC 33.36%, #3377C8 110.33%);

  h1.title {
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    margin: 0;
    margin-bottom: 8px;
  }

  h2.subtitle {
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: lighter;
    font-size: 1.6rem;
    line-height: 44px;
    margin: 0;
  }
`;

export const Section = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 100px auto;

  h3.title {
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    margin: 0;
    margin-bottom: 35px;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-gap: 20px;
    margin: 20px 0px;
  }
`;
