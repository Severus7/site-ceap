import React from "react";
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import Layout from "../../components/Layout";

const Contact = () => {
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
            Contact
          </Typography>
        </Box>
        <Box sx={{ padding: "70px 0 50px 0" }} fullWidth>
          <Grid container spacing={10}>
            <Grid item lg={6}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ borderBottom: "1px solid #bdbdbd", marginBottom: "20px" }}
              >
                About
              </Typography>
              <Typography variant="body" sx={{ textAlign: "justify" }}>
                A world transformed, a Philippines renewed by the people
                educated in the principles of Communio and Service as taught and
                lived by our Lord Jesus Christ and shaped by the missionary
                mandate of the Catholic Church.
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Box component="form">
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  sx={{ marginBottom: "20px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default Contact;
