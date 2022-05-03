import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Typography,
} from "@mui/material";
import Layout from "../../components/Layout";
import { ExpandMore } from "@mui/icons-material";

const About = () => {
  return (
    <Layout>
      <Container
        sx={{
          borderLeft: "1px solid #bdbdbd",
          borderRight: "1px solid #bdbdbd",
        }}
      >
        <Box
          sx={{ padding: "70px 0 70px 0", borderBottom: "1px solid #bdbdbd" }}
        >
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            About
          </Typography>
        </Box>
        <Box sx={{ padding: "70px 0 50px 0" }}>
          <Typography component="h3" variant="h3" gutterBottom>
            Vision
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            sx={{ fontWeight: "100", textAlign: "justify" }}
          >
            A world transformed, a Philippines renewed by the people educated in
            the principles of Communio and Service as taught and lived by our
            Lord Jesus Christ and shaped by the missionary mandate of the
            Catholic Church.
          </Typography>
        </Box>

        {/* MISSION */}
        <Box sx={{ paddingBottom: "70px" }}>
          <Typography component="h3" variant="h3" gutterBottom>
            Mission
          </Typography>
          <Box>
            <Accordion
              elevation={0}
              sx={{ border: "1px solid #bdbdbd", padding: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{ fontWeight: "100", textAlign: "justify" }}
                >
                  To strengthen solidarity among member schools through catholic
                  education
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Results-driven, adequate, relevant, reliable, and timely data
                from CEAP member schools gathered
              </AccordionDetails>
              <AccordionDetails>
                Assistance that enables CEAP Member schools to meet the
                standards of quality education provided
              </AccordionDetails>
              <AccordionDetails>
                Assistance that enables CEAP Mission Schools to sustain
                themselves provided
              </AccordionDetails>
              <AccordionDetails>
                Solidarity among CEAP regions achieved
              </AccordionDetails>
            </Accordion>

            <Accordion
              elevation={0}
              sx={{ border: "1px solid #bdbdbd", padding: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{ fontWeight: "100", textAlign: "justify" }}
                >
                  To champion relevant, inclusive and transformative catholic
                  education - sentire cum ecclesia
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Extent of access, quality, and equity among our CEAP member
                schools measured and expanded
              </AccordionDetails>
              <AccordionDetails>
                New ways of evangelization and faith formation through the
                Philippine Catholic Schools Standards and school-based Christian
                formation programs implemented
              </AccordionDetails>
              <AccordionDetails>
                Efforts towards curriculum and materials development,
                teacher-training, sharing strategies, and discussion on other
                critical areas of concern in light of the K to 12, the fourth
                industrial revolution (4IR) and other developments in education
                continued
              </AccordionDetails>
            </Accordion>

            <Accordion
              elevation={0}
              sx={{ border: "1px solid #bdbdbd", padding: "10px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{ fontWeight: "100", textAlign: "justify" }}
                >
                  To be catalysts of change through dialogue, collaboration and
                  education in the different dimension of human life
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                Impact of CEAP member-schools as agents of transformation
                determined
              </AccordionDetails>
              <AccordionDetails>
                Collaborations between various stakeholders to address
                identified issues initiated and actualized
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default About;
