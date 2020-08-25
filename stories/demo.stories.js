/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import withImageLoader from '../src/index';
import { Content, Title } from './styles';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  > div {
    margin: 0 1rem;
  }
`;

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

const StyledCustomComponent = styled.div`
  display: flex;
  color: #FF0000;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid #FF0000;
`;
const CustomComp = ({ text }) => (<StyledCustomComponent>{text}</StyledCustomComponent>);

dynamicStories.add('Basic Usage', () => {
  const knobs = {
    src: text('src', 'https://edmullen.net/test/rc.jpg'),
    fadeIn: boolean('fadeIn', true),
    width: text('width', '300px'),
    height: text('height', '200px'),
  };
  const ImageWithLoader = withImageLoader(Image);
  const StyledImageWithLoader = withImageLoader(StyledImage);
  return (
    <Content>
      <Title>React Image Loader HOC</Title>
      <Row>
        <div>
          <p>Example: Img tag Component</p>
          <ImageWithLoader {...knobs}/>
        </div>

        <div>
          <p>Example: Div tag image as background</p>
          <StyledImageWithLoader {...knobs}/>
        </div>

        <div>
          <p>Example: Custom Loader Component</p>
          <ImageWithLoader
            {...knobs}
            loaderComp={() => <CustomComp text="Loading..." />}
          />
        </div>

        <div>
          <p>Example: Custom Error Component</p>
          <ImageWithLoader
            {...knobs}
            src={`${knobs.src}-error`}
            errorComp={() => <CustomComp text="Oops! Can't load image" />}
          />
        </div>
      </Row>
    </Content>
  );
});
