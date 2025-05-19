import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

export default function PhotoCarousel() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show && (
        <section className={show ? "bounce" : ""}>
          <div style={{ width: "800px" }}>
            <Carousel fade>
              <Carousel.Item>
                <Image src="/A23A1209.jpg" text="Bride & Groom" fluid />
                <Carousel.Caption>
                  <h3>Bride & Groom</h3>
                  <p>August 31, 2023</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="/Beach Wedding.jpg"
                  text="Pensecola Wedding"
                  fluid
                />
                <Carousel.Caption>
                  <h3>"Wedding At The Beach"</h3>
                  <p>Pensecola Wedding</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/Day Dreaming.jpg" text="Day Dreaming" fluid />
                <Carousel.Caption>
                  <h3>Day Dreaming</h3>
                  <p>Dreaming of Better Days.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/Maternity.jpg" text="maternity" fluid />
                <Carousel.Caption>
                  <h3>"Waiting For My Blessing"</h3>
                  <p>Maternity</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/Star.jpeg" text="Star" fluid />
                <Carousel.Caption>
                  <h3>"My Shining Star"</h3>
                  <p>Star</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/Treasure.jpg" text="Treasure" fluid />
                <Carousel.Caption>
                  <h3>"Treasure"</h3>
                  <p>4 Months Old</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="/Wedding Veil.jpg" text="Wedding Veil" fluid />
                <Carousel.Caption>
                  <h3>"Under The Veil"</h3>
                  <p>Wedding Veil</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
      )}
      {show && <div></div>}
      <button onClick={() => setShow(!show)}>See Examples of My Work!</button>
    </>
  );
}
