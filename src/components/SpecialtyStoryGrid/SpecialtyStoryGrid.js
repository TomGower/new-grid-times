import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';
import { COLORS, QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.laptopAndUp} {
    gap: 0;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: calc(50% - 16px) calc(50% - 16px);
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const SportsSection = styled.section`
  overflow: hidden;

  @media ${QUERIES.laptopAndUp} {
    margin-left: 16px;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    overflow-x: auto;
    /* grid-template-columns: repeat(5, 220px); */
    grid-template-columns: repeat(auto-fill, 220px);
    grid-auto-flow: column;
    grid-auto-columns: 220px;
  }
`;

export default SpecialtyStoryGrid;
