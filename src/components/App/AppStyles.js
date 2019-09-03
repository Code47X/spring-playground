import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(321.67deg, #7D4DAC 33.36%, #3377C8 110.33%);
`;

export const HeadContent = styled.div`
  text-align: center;
  margin: auto;
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  margin: 0;
  margin-bottom: 8px;
`;

export const SubTitle = styled.h2`
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: lighter;
  font-size: 1.6rem;
  line-height: 44px;
  margin: 0;
`;

export const ContentContainer = styled.div`
  width: 92%;
  max-width: 1400px;
  margin: auto;
  padding-top: 100px;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
