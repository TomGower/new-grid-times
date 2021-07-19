import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => (
  <>
    <MobileHeader />
    <DesktopHeader />
  </>
)

const MobileHeader = () => {
  return (
    <MobileWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </MobileWrapper>
  );
};

const DesktopHeader = () => {
  return (
    <DesktopWrapper>
      <DesktopSuperHeader>
        <ActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </ActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubscriberText>Already a subscriber?</SubscriberText>
        </SubscribeWrapper>
      </DesktopSuperHeader>
    </DesktopWrapper>
  );  
}

const MobileWrapper = styled.header`
  display: inherit;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopWrapper = styled(MaxWidthWrapper)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: inherit;
    margin-top: 16px;
    margin-bottom: 80px;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const DesktopSuperHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
 
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
`;

const SubscriberText = styled.div`
  font-style: italic;
  color: var(--color-gray-900);
  text-decoration: underline;
`;

export default Header;
