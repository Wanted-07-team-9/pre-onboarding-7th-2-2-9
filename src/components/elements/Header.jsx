import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HeaderBar } from '../../assets/icons/alarm.svg';

const Header = () => {
  return (
    <Wrapper>
      <StyledHeaderBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const StyledHeaderBar = styled(HeaderBar)`
  svg {
    width: 100%;
  }
`;

export default Header;
