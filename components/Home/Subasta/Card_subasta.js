import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import styles from "./Subasta.module.scss";

const CardSubasta = ({
  url,
  title,
  text,
  url2,
  text2,
  text3,
  text4,
  text5,
}) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>{text}</p>
            <Link href={url2}>
              <a className="view-more">Ver más</a>
            </Link>
          </Card.Text>
        </Card.Body>
        <Card.Text className="footer-card">
          <p>
            {text2}
            <span> {text3}</span>
          </p>
          <p>Puja mínima {text4}</p>
        </Card.Text>
        <div className="circle-subasta">
          <p>Subasta</p>
        </div>
        <div className="valor">
          <p>Valoración:</p>
          <span>{text5}</span>
        </div>
      </Card>
    </>
  );
};

export default CardSubasta;
