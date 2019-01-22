# React Image Loader HOC
[![Version](https://img.shields.io/npm/v/react-image-loader-hoc.svg?style=for-the-badge&logo=appveyor)]()
[![React](https://img.shields.io/npm/dependency-version/react-image-loader-hoc/react.svg?style=for-the-badge&logo=appveyor)]()
[![Downloads](https://img.shields.io/npm/dw/react-image-loader-hoc.svg?style=for-the-badge&logo=appveyor)]()
[![License](https://img.shields.io/github/license/iamgutz/react-image-loader-hoc.svg?style=for-the-badge&logo=appveyor)]()

React-Image-Loader-HOC is a High Order Component that allows you to enhance your React Image Component by adding features to handle the loading of the image source in an elegant way.

## Features
* Super easy to use.
* Customizable - Provided props to make it custom for your project.

## Installation
```
$ yarn add react-image-loader-hoc
or
$ npm install --save react-image-loader-hoc
```

## Usage

Add the `DialogContainer` at the root level of your App, or as children of any specific container in your App. But remember to **add it only once in your App**.

```
import React, { Component } from 'react';
import { DialogContainer, dialog } from 'react-image-loader-hoc';

class App extends Component {
  showDialog = () => {
    dialog.show({
        title: 'Hello World!'
        text: 'This is your text in the dialog'
    });
  }

  render() {
    return (
        <div>
          <button onClick={this.showDialog}> Show Dialog </button>
          <DialogContainer />
        </div>
    );
  }
}
```

## Using default dialog with predefined types
### Methods
|Method| Description|
|---	|---	|
|success| Display default dialog with the success context (color green)|
|error| Display default dialog with the error context (color red)|
|warning| Display default dialog with the warning context (color gold)|
|pending| Display default dialog with the pending context (color light blue)|
|info| Display default dialog with the info context (color blue)|
|close| Close the dialog|

**Example:**
```
dialog.info({
  title: 'News! Some tips!',
  text: 'Read this! This dialog shows you some useful info!',
  btnText: 'Close me now!',
  btnOnClick() { dialog.close(); },
});
```
### Required options
|Name| Type| Description|
|---	|--- |---	|
|title| String | Displayed as title in the dialog|
|text| String | Displayed as content in the dialog|
|btnText| String | Displayed as text in the dialog's button|
|btnOnClick| function | Method called in the onClick event of the dialog's button|

## Using a custom dialog component
You are able to use your own Dialog React Component, you just need to make sure your component takes the options as props. There are two ways:

### 1. Passing the Component to DialogContainer as a Prop
When you setup the `DialogContainer` in your App, you can pass to it the prop `template` to use a custom Dialog Component.

**Example:**
```
// App.js
import MyComponent from './my-component';

// ..... //

render() {
  return (
      <div>
        <button onClick={this.showDialog}> Show Dialog </button>
        <DialogContainer template={MyComponent} />
      </div>
  );
}
```

### 2. Passing the Component Argument
The `show` method takes as a second argument a React Component, the `DialogContainer` will pass the options argument as props to your Component, this way you can change the Dialog component on the fly!
Your component can take any props you decide :)

**Example:**
```
// App.js
import MyComponent from './my-component';

// ..... //
showDialog = () => {
  dialog.show({
      headline: 'Custom prop',
      content: 'Custom prop',
      cancelBtnText: 'Custom prop',
      submitBtnText: 'Custom prop'
  }, MyComponent);
}
render() {
  return (
      <div>
        <button onClick={this.showDialog}> Show Dialog </button>
        <DialogContainer />
      </div>
  );
}
```

# Demo
You want to see some examples? Easy, follow this steps:

* Clone this Repo https://github.com/iamgutz/react-dialogify
* Install dependencies, run `yarn` or `npm install`
* Run Storybook `yarn storybook` or `npm run storybook`
* It will open your browser with the storybook examples
