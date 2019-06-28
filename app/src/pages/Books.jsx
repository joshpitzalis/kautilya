import React from "react";

const Books = () => (
  <article className="cf ph3 ph5-ns pv5">
    <Details />
    <Image />

    <Description />
    <SideList />
  </article>
);

const Image = () => (
  <div className="fn fl-ns w-50-ns">
    <div class="aspect-ratio aspect-ratio--3x4 mb4">
      {/* <div
        class="aspect-ratio--object cover"
        style={{
          background: "url(http://mrmrs.github.io/photos/001.jpg) center"
        }}
      /> */}
      <img
        className="db ba b--black-10"
        alt="Frank Ocean Blonde Album Cover"
        src="https://s3-us-west-1.amazonaws.com/tachyonsio/img/Blonde-Frank_Ocean.jpeg"
      />
    </div>
  </div>
);

const Details = () => (
  <header className="fn fr-ns w-50-ns pr4-ns pl4">
    <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">On Typography</h1>
    <h2 className="f3 mid-gray lh-title">
      An excerpt from the Form of the Book by Jan Tschichold
    </h2>
    <time className="f6 ttu tracked gray">Sometime before 1967</time>
  </header>
);

const Description = () => (
  <div className="dib w-75-ns pr4-ns">
    <p className="f5 lh-copy measure mt0-ns">
      TYPOGRAPHY, even when poorly executed, can never be taken for granted; nor
      is it ever accidental. Indeed, beauti- fully typeset pages are always the
      result of long experience. Now and then they even attain the rank of great
      artistic achievement. But the art of typesetting stands apart from ex-
      pressive artwork, because the appeal is not limited to a small circle. It
      is open to everyone's critical judgment, and nowhere does this judgment
      carry more weight. Typography that can- not be read by everybody is
      useless. Even for someone who constantly ponders matters of readability
      and legibility, it is difficult to determine whether something can be read
      with ease, but the average reader will rebel at once when the type is too
      small or otherwise irritates the eye; both are signs of a certain
      illegibility already.
    </p>
    <p className="f5 lh-copy measure">
      All typography consists of letters. These appear either in the form of a
      smoothly running sentence or as an assembly of lines, which may even have
      contrasting shapes. Good typog- raphy begins, and this is no minor matter,
      with the typeset- ting of a single line of text in a book or a newspaper.
      Using exactly the same typeface, it is possible to create either a
      pleasant line, easily read, or an onerous one. Spacing, if it is too wide
      or too compressed, will spoil almost any typeface.
    </p>
  </div>
);

const SideList = () => (
  <aside className="dib w-25-ns pr4-ns">
    <article>
      <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
        <div class="dtc w3">
          <img src="http://mrmrs.github.io/images/0010.jpg" class="db w-100" />
        </div>
        <div class="dtc v-top pl2">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">Grid Systems</h1>
          <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
          <dl class="mt2 f6">
            <dt class="clip">Price</dt>
            <dd class="ml0">$75.00</dd>
          </dl>
        </div>
      </a>
    </article>
    <article>
      <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
        <div class="dtc w3">
          <img src="http://mrmrs.github.io/images/0002.jpg" class="db w-100" />
        </div>
        <div class="dtc v-top pl2">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">History of the Poster</h1>
          <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
          <dl class="mt2 f6">
            <dt class="clip">Price</dt>
            <dd class="ml0">$15.00</dd>
          </dl>
        </div>
      </a>
    </article>
    <article>
      <a class="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
        <div class="dtc w3">
          <img src="http://mrmrs.github.io/images/0004.jpg" class="db w-100" />
        </div>
        <div class="dtc v-top pl2">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">
            Graphic Design in IBM: Typography, Photography, and Illustration
          </h1>
          <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
          <dl class="mt2 f6">
            <dt class="clip">Price</dt>
            <dd class="ml0">$15.00</dd>
          </dl>
        </div>
      </a>
    </article>
    <article class="mt2">
      <a class="link dt w-100 bb b--black-10 dim blue" href="#0">
        <div class="dtc w3">
          <img src="http://mrmrs.github.io/images/0010.jpg" class="db w-100" />
        </div>
        <div class="dtc v-top pl2">
          <h1 class="f6 f5-ns fw6 lh-title black mv0">
            A History of Visual Communication (Geschichte der visuellen
            Kommunikation)
          </h1>
          <h2 class="f6 fw4 mt2 mb0 black-60">Josef Müller-Brockmann</h2>
          <dl class="mt2 f6">
            <dt class="clip">Price</dt>
            <dd class="ml0">$15.00</dd>
          </dl>
        </div>
      </a>
    </article>
  </aside>
);

export default Books;
