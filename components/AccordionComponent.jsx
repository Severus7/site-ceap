import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const AccordionComponent = (props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={props.control}
        id={props.id}
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{props.detailA}</AccordionDetails>
      <AccordionDetails>{props.detailB}</AccordionDetails>
      <AccordionDetails>{props.detailC}</AccordionDetails>
      <AccordionDetails>{props.detailD}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
