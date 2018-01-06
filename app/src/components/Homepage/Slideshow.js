import React, { Component, Children, Fragment } from 'react';

class Slideshow extends Component {
  state = {
    total: 0,
    current: 0
  };

  componentDidMount() {
    const { children } = this.props;
    this.setState({ total: Children.count(children) });
    this.interval = setInterval(this.showNext, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNext = () => {
    const { total, current } = this.state;
    this.setState({ current: current + 1 === total ? 0 : current + 1 });
  };
  render() {
    let currentChild = Children.toArray(this.props.children)[
      this.state.current
    ];
    const buttons = Children.map(currentChild, child => (
      <img src={child} height="200" />
    ));
    const bullets = Array(this.state.total).fill('○');
    bullets[this.state.current] = '●';
    return (
      <Fragment>
        <div>{buttons}</div>
        {bullets}
      </Fragment>
    );
  }
}

export default Slideshow;
