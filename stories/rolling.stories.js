/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Rolling, { DEFAULT_PROPS } from '../src/components/rolling';

const dynamicStories = storiesOf('Components/Rolling', module);
dynamicStories.addDecorator(withKnobs);

dynamicStories.add('Example', () => {
  const knobs = DEFAULT_PROPS;
  return (
    <Fragment>
      <h1>Rolling spinner</h1>
      <Rolling
        size={number('size (pixels)', knobs.size)}
        color={text('color', knobs.color)}
        strokeThickness={number('strokeThickness', knobs.strokeThickness)}
        dasharray={text('dasharray', knobs.dasharray)}
        duration={number('duration (seconds)', knobs.duration)}
      />
    </Fragment>
  );
});
