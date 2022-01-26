import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Animated} from 'react-native';

export default class BlinkView extends Component {
  static propTypes = {
    element: PropTypes.any,
    children: PropTypes.any,
    delay: PropTypes.number,
    blinking: PropTypes.bool,
  };

  static defaultProps = {
    element: View,
    children: null,
    delay: 1500,
    blinking: true,
  };

  constructor(props) {
    super(props);

    this.state = {
      delay: props.delay || 1500,
      blinkAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    try {
      if (this.props.blinking === true) {
        clearInterval(this.onDelay);
        this.onDelay = setInterval(() => {
          this.state.blinkAnim.stopAnimation();
          Animated.timing(this.state.blinkAnim, {
            toValue: this.state.blinkAnim._value === 0 ? 1 : 0, // eslint-disable-line
            duration: this.state.delay - 1,
            useNativeDriver: false,
          }).start();
        }, this.state.delay + 1);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  componentWillUnmount() {
    try {
      clearInterval(this.onDelay);
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    try {
      const isBlinking = (this.props && this.props.blinking) || false;
      const Element =
        isBlinking === true
          ? Animated.createAnimatedComponent(
              (this.props && this.props.element) || View,
            )
          : (this.props && this.props.element) || View;

      return (
        <Element
          {...this.props}
          style={[
            this.props.style,
            {opacity: isBlinking === true ? this.state.blinkAnim : 1},
          ]} // eslint-disable-line
        >
          {(this.props && this.props.children) || null}
        </Element>
      );
    } catch (err) {
      console.warn(err);
    }
    return (this.props && this.props.children) || <View />;
  }
}
