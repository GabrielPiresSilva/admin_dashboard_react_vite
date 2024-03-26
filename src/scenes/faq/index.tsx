import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "components/Header";
import { tokens } from "theme";
import { faqQuestions } from "./FAQQuestionsMock";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {faqQuestions.length &&
        faqQuestions.map((faq) => (
          <Accordion key={faq.id}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography color={colors.greenAccent[500]} variant="h5">
                {faq.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
};

export default FAQ;
