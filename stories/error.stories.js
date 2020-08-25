/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import CloudOff, { DEFAULT_PROPS } from '../src/components/cloud-off';

const dynamicStories = storiesOf('SubComponents/errorComp', module);
dynamicStories.addDecorator(withKnobs);

dynamicStories.add('Example', () => {
  const knobs = DEFAULT_PROPS;
  return (
    <Fragment>
      <h1>Error Component</h1>
      <CloudOff
        size={number('size (pixels)', knobs.size)}
        color={text('color', knobs.color)}
      />
    </Fragment>
  );
});
