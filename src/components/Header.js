import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      TV Schedule - Currently Airing Shows in the US
    </HeaderWrapper>
  );
};

export default Header;
