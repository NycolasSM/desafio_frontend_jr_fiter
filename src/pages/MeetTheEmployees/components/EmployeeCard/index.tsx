import { useEffect, useRef } from "react";

import { Card, CardGroup } from "react-bootstrap";
import VanillaTilt from "vanilla-tilt";

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
    "max-glare": 0.1,
  };

  return (
    <div className="container">
      <CardGroup className="employee__card__group gap-10">
        <Card
          className="employee__card"
          style={{ border: "none", height: "400px", width: "200px" }}
        >
          <Tilt className="cardTilt" tiltOptions={tiltOptions}>
            <Card.Img
              className="employee__card__image"
              variant="top"
              style={{ height: "150px", width: "150px" }}
              src="https://picsum.photos/id/1/200/300"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natura
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Tilt>
        </Card>
        <Card style={{ border: "none" }}>
          <Tilt className="cardTilt" tiltOptions={tiltOptions}>
            <Card.Img
              className="employee__card__image"
              variant="top"
              style={{ height: "150px", width: "150px" }}
              src="https://picsum.photos/id/1/200/300"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Tilt>
        </Card>
        <Card style={{ border: "none" }}>
          <Tilt className="cardTilt" tiltOptions={tiltOptions}>
            <Card.Img
              className="employee__card__image"
              variant="top"
              style={{ height: "150px", width: "150px" }}
              src="https://picsum.photos/id/1/200/300"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Tilt>
        </Card>
      </CardGroup>
    </div>
  );
};

export default index;
