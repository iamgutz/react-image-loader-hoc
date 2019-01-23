/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import withImageLoader from '../src/index';
import { Content, Title } from './styles';

const Image = props => (<img alt="" {...props} />);
const StyledImage = styled.div`
  background-image: url(${props => props.src});
  opacity: 1;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  background-size: cover;
  background-position: center;
  font-size: inherit;
`;

const dynamicStories = storiesOf('DEMO', module);
dynamicStories.addDecorator(withKnobs);

dynamicStories.add('Basic Usage', () => {
  const knobs = {
    src: 'https://edmullen.net/test/rc.jpg',
    fadeIn: true,
    width: '300px',
    height: '200px',
  };
  const ImageWithLoader = withImageLoader(Image);
  const StyledImageWithLoader = withImageLoader(StyledImage);
  return (
    <Content>
      <Title>React Image Loader HOC</Title>
      <p>Example: Regular img tag Component</p>
      <ImageWithLoader
        src={text('src', knobs.src)}
        fadeIn={boolean('fadeIn', knobs.fadeIn)}
        width={text('width', knobs.width)}
        height={text('height', knobs.height)}
      />
      <p>Example: Styled Component what sets the image as background</p>
      <StyledImageWithLoader
        src={text('src', knobs.src)}
        fadeIn={boolean('fadeIn', knobs.fadeIn)}
        width={text('width', knobs.width)}
        height={text('height', knobs.height)}
      />
    </Content>
  );
});
