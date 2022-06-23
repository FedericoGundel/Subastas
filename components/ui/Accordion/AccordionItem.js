import React from "react";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';

import styles from "./AccordionItem.module.scss";

const AccordionItem = ({ nroItem, textButton, textContent }) => {
  return (
    <>
      <Accordion.Item eventKey={"item" + nroItem}>
        <Accordion.Header>
          {textButton}
        </Accordion.Header>
        <Accordion.Body>
          {textContent}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default AccordionItem;