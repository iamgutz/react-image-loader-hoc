import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ErrorComponent from './components/error';
import LoaderComponent from './components/loader';
import EnhancedComponent from './components/enhanced';

export default WrappedComponent => {
  class ImageLoaderHOC extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        imageLoaded: false,
        imageError: false,
      };
      this._isMounted = false;
      this.isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
      this.domImg = this.isBrowser ? new window.Image() : {};
      this.setImageLoaded = this.setImageLoaded.bind(this);
      this.setImageError = this.setImageError.bind(this);
      this.resetState = this.resetState.bind(this);
      this.handleOnLoad = this.handleOnLoad.bind(this);
      this.handleOnError = this.handleOnError.bind(this);
      this.handleImageLoading = this.handleImageLoading.bind(this);
    }

    componentDidMount() {
      this._isMounted = true;
      this.handleImageLoading();
    }

    componentDidUpdate(prevProps) {
      const { src } = this.props;
      if (src !== prevProps.src) {
        this.handleImageLoading();
      }
    }

    componentWillUnmount() {
      this._isMounted = false;
      this.domImg.src = '';
    }

    setImageLoaded() {
      this.setState({ imageLoaded: true });
    }

    setImageError() {
      this.setState({ imageError: true });
    }

    resetState() {
      this.setState({
        imageLoaded: false,
        imageError: false,
      });
    }

    handleOnLoad() {
      const { onLoad } = this.props;
      if (this._isMounted) {
        this.setImageLoaded();
      }
      if (onLoad) {
        onLoad();
      }
    }

    handleOnError(error) {
      const { onError } = this.props;
      if (this._isMounted) {
        this.setImageError();
      }
      if (onError) {
        onError(error);
      }
    }

    handleImageLoading() {
      const { src } = this.props;
      this.resetState();
      this.domImg.src = src;
      this.domImg.onload = () => this.handleOnLoad();
      this.domImg.onerror = () => this.handleOnError();
    }

    render() {
      const { imageLoaded, imageError } = this.state;
      const { loaderComp, errorComp, fadeIn, ...rest } = this.props;

      if (!imageLoaded && !imageError) {
        return (
          <LoaderComponent component={loaderComp} {...rest} />
        );
      }

      if (imageError) {
        return <ErrorComponent component={errorComp} {...rest} />;
      }

      return (
        <EnhancedComponent
          component={WrappedComponent}
          fadeIn={fadeIn}
          {...rest}
        />
      );
    }
  }

  ImageLoaderHOC.propTypes = {
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    loaderComp: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.elementType,
    ]),
    errorComp: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.elementType,
    ]),
    fadeIn: PropTypes.bool,
  };

  ImageLoaderHOC.defaultProps = {
    onLoad() {},
    onError() {},
    loaderComp: null,
    errorComp: null,
    fadeIn: true,
  };

  return ImageLoaderHOC;
};
