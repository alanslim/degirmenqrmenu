import { Card } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
export default function FoodCardComponent({
  src,
  name_ru,
  name_kz,
  price,
  description_ru,
  description_kz,
  bgr,
}) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Card
        style={{
          backgroundImage: `url(${bgr})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card.Img
          onClick={() => setShow(true)}
          src={src}
          alt={name_ru}
          className="w-40"
        />
        <Card.Body>
          <Card.Title>{name_ru}</Card.Title>
          <Card.Title>{name_kz}</Card.Title>
          <Card.Text>{description_ru}</Card.Text>
          <Card.Text>{description_kz}</Card.Text>
          <Card.Text className="prices">
            <b>{price}</b>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body className="text-center">
          <img src={src} alt={name_ru} className="w-100" />
        </Modal.Body>
      </Modal>
    </>
  );
}
