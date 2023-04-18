import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next'

export default function QuestionBox(props) {
  const { t } = useTranslation()
//   const appuser = useContext(UserContext);
//   const [expanded, setExpanded] = React.useState(false);
//   const [isRejecting, setIsRejecting] = React.useState(false);
//   const { users, filter, update } = props;

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//     console.log("panel", panel);
//     // setExpanded(!expanded);
//   };

//   const handleClick = (e) => {
//     console.log("e", e);
//     console.log("expanded", expanded);
//     setExpanded(!expanded);
//     console.log("expanded", expanded);

//     };

const variableOptions2 = t("Home.FAQ.questions", {
  returnObjects: true,
});
console.log("variableOptions2", variableOptions2);
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // width: "70%",
    }}>
      {variableOptions2.map((question, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{
              fontSize: "1.1rem",
              fontFamily:"'Google Sans', 'Google Sans Text', Roboto, sans-serif"
            }}>{question.question}</Typography>
          </AccordionSummary>
          <AccordionDetails 
          style={{
            backgroundColor: "#D8E4F7",
          }}
          >
            <Typography
             sx={{
              marginBottom: "10px",
             }}
            >
              {question.answer}
            </Typography>
            {
              question.subAnswer && question.subAnswer.map((subAnswer, index) => (
                <Typography 
                sx={{
                  margin: "10px",
                 }}
                key={index}>
                  {subAnswer}
                </Typography>
              ))

            }
          </AccordionDetails>
        </Accordion>
      ))}
    </div>

    //   <div>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel1a-content"
    //       id="panel1a-header"
    //     >
    //       <Typography>Accordion 1</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel2a-content"
    //       id="panel2a-header"
    //     >
    //       <Typography>Accordion 2</Typography>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Typography>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget.
    //       </Typography>
    //     </AccordionDetails>
    //   </Accordion>
    //   <Accordion disabled>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel3a-content"
    //       id="panel3a-header"
    //     >
    //       <Typography>Disabled Accordion</Typography>
    //     </AccordionSummary>
    //   </Accordion>
    // </div>
  );
}
