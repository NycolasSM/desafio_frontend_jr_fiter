import { useEffect, useRef } from "react";

import VanillaTilt from "vanilla-tilt";

import { BrowserView, MobileView } from "react-device-detect";

import CardCollar from "./components/CardCollar";

import "./index.css";

type Props = {
  name: string;
  role: string;
  phone: string;
  profileImg: string;
};

const index: React.FC<Props> = ({ name, role, phone, profileImg }) => {
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
    <>
      <BrowserView>
        <div className="employee__card__container">
          <div className="employee__card__collar__mockup"></div>
          <Tilt tiltOptions={tiltOptions}>
            <div className="employee__card">
              <CardCollar />
              <img
                className="employee__card__image"
                src={profileImg}
                alt="profile image"
              />
              <div className="employee__card__info">
                <h3>{name}</h3>
                <h4>{role}</h4>
                <p>Telefone: {phone}</p>
              </div>
            </div>
          </Tilt>
        </div>
      </BrowserView>
      <MobileView>
        <div className="employee__card__container">
          <div className="employee__card__collar__mockup"></div>
          <div className="employee__card">
            <CardCollar />
            <img
              className="employee__card__image"
              src={profileImg}
              alt="profile image"
            />
            <div className="employee__card__info">
              <h3>{name}</h3>
              <h4>{role}</h4>
              <p>Telefone: {phone}</p>
            </div>
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default index;
