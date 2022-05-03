import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const FooterComponent = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginTop: `${props.marginTop}`,
        height: "100px",
        padding: "70px 0px 80px 0px",
        borderTop: "1px solid #bdbdbd",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Copyright 2017 Catholic Educational Association of the Philippines
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterComponent;
