import React, { Children, Component } from "react";

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
    const covers = Children.map(currentChild, child => (
      <img src={child} className="shadow-1" height="200" />
    ));
    const bullets = Array(this.state.total).fill("○");
    bullets[this.state.current] = "●";
    return (
      <div className="flex flex-column items-center pv5 bg-light-blue">
        <div className="flex flex-row ">
          {covers}
          <div className="ml3">
            <h1 className="f1">Dr.lalalala ipsum loren</h1>
            <p>something something</p>
          </div>
        </div>
        <div className="mt3">{bullets}</div>
      </div>
    );
  }
}

export default Slideshow;
