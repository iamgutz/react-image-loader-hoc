/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import withImageLoader from '../src/index';

const Image = props => (<img alt="" {...props} />);

const dynamicStories = storiesOf('Image Loader HOC', module);
dynamicStories.addDecorator(withKnobs);

dynamicStories.add('Example', () => {
  const knobs = {
    src: 'https://edmullen.net/test/rc.jpg',
    fadeIn: true,
  };
  const ImageWithLoader = withImageLoader(Image);
  return (
    <Fragment>
      <h1>React Image Loader HOC</h1>
      <ImageWithLoader
        src={text('src', knobs.src)}
        fadeIn={boolean('fadeIn', knobs.fadeIn)}
      />
    </Fragment>
  );
});
