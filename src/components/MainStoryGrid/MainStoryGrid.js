import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';
import { COLORS, QUERIES } from '../../constants'

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          <OpinionStories>
            {OPINION_STORIES.map((story, index) => (
              <OpinionStory key={story.id} {...story} />
            ))}
          </OpinionStories>
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    gap: 0;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    gap: 0;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 1.75fr 1.4fr 1fr;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.tabletAndUp} {
    margin-left: 16px;
    margin-bottom: 16px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    border-right: 1px solid ${COLORS.gray[300]};
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  > a:not(:first-of-type) {
    padding-top: 16px;
  }

  > a:not(:last-of-type) {
    padding-bottom: 16px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }

  @media ${QUERIES.tabletOnly} {
    > a:not(:first-of-type) {
      padding-top: none;
    }

    > a:not(:last-of-type) {
      padding-bottom: none;
      border-bottom: none;
    }
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly} {
    margin-top: 48px;
  }

  @media ${QUERIES.tabletAndUp} {
    padding-bottom: 16px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-left: 16px;
  }
`;

const OpinionStories = styled.div`
  display: grid;

  > a:not(:first-of-type) {
    padding-top: 16px;
  }

  > a:not(:last-of-type) {
    padding-bottom: 16px;
    border-bottom: 1px solid ${COLORS.gray[300]};
  }

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;

    > a:not(:first-of-type) {
      padding-top: inherit;
    }

    > a:not(:last-of-type) {
      padding-bottom: inherit;
      border-bottom: none;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.tabletOnly} {
    margin-top: 48px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    margin-left: 16px;
    border-top: 1px solid ${COLORS.gray[300]};
  }
`;

export default MainStoryGrid;
