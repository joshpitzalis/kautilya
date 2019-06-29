import React, { Children, Component } from "react";
import Overdrive from "react-overdrive";
import { animated, useSpring } from "react-spring";

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

    const books = Children.map(currentChild, child => (
      <FeaturedBook child={child} />
    ));

    const bullets = Array(this.state.total).fill("○");
    bullets[this.state.current] = "●";

    return (
      <div className="flex flex-column items-center justify-center bg-light-blue vh-100">
        <>
          {books}
          <div className="mt3">{bullets}</div>
        </>
      </div>
    );
  }
}

export default Slideshow;

const FeaturedBook = animated(({ child }) => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: { duration: 2000 }
  });

  return (
    <section className="flex flex-row" style={fade}>
      <Overdrive id="bookCover">
        <figure>
          <img src={child} className="shadow-1" height="350" alt="alt" />
          <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
        </figure>
      </Overdrive>
      <div className="ml3">
        <h1 className="f1">Dr.lalalala ipsum loren</h1>
        <p>something something</p>
      </div>
    </section>
  );
});
