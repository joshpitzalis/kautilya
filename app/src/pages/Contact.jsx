import React from "react";
import map from "../images/map.png";

const Contact = () => (
  <div
    className="pt6 vh-100 w-100 tc bg-dark-gray white cover"
    style={{ background: `url(${map}) no-repeat center` }}
    // https://www.google.com/maps/place/Kautilya+Books/@28.6451869,77.2472063,16z/data=!4m8!1m2!2m1!1sKautilya+Books++F-5,+Hari+Salan+20+Ansari+road+Daryaganj+New+Delhi+110002!3m4!1s0x390cfcdfadeeaaab:0x484d74929669df0a!8m2!3d28.646126!4d77.243437
  >
    <div className="w-75-ns center flex justify-end">
      <article className="w-50-ns w-100 ph3 ph5-ns tl br2 pv5 bg-washed-blue dark-blue  ">
        <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">Address</h1>

        <p className="fw1 f5 mt0 mb3">
          Kautilya Books <br />
          F-5, Hari Salan
          <br />
          20 Ansari road
          <br />
          Daryaganj
          <br />
          New Delhi
          <br />
          110002
          <br />
        </p>

        <h2 className="fw2 f4 lh-copy mt0 mb3">Enquiries</h2>
        <p className="fw1 f5 mt0 mb3">
          +91 11 4753 4346
          <br />
          +91 9911554346
        </p>
        {/* <div>
        <a
          className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
          href="#"
        >
          Sign Up
        </a>
        <a
          className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
          href="#"
        >
          Learn More
        </a>
      </div> */}
      </article>
    </div>
  </div>
);

export default Contact;
