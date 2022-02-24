import { useEffect, useRef } from "react";

import VanillaTilt from "vanilla-tilt";

import CardCollar from "./components/CardCollar";

import "./index.css";

const index = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function Tilt(props: any) {
    const { tiltOptions, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, tiltOptions);
    }, [tiltOptions]);

    return <div ref={tilt} {...rest} />;
  }

  const tiltOptions = {
    scale: 1,
    speed: 2500,
    max: 10,
    glare: true,
    "max-glare": 0.3,
  };

  return (
    <div>
      <div className="employee__card__collar__mockup"></div>
      <Tilt tiltOptions={tiltOptions}>
        <div className="employee__card">
          <CardCollar />
          <img
            className="employee__card__image"
            src="https://picsum.photos/200"
            alt=""
          />
          <div className="employee__card__info">
            <h3>Sergio Amad</h3>
            <h4>Founder & CEO</h4>
            <p>Telefone: 11921345675"</p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default index;
