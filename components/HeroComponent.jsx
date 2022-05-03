import Image from "next/image";
import { Container, Grid, Typography } from "@mui/material";

const HeroComponent = (props) => {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        zIndex: -100,
        borderBottom: "1px solid #bdbdbd",
      }}
    >
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        layout="fill"
        objectFit="cover"
      />
      <Grid
        container
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, 0.4)",
        }}
      >
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              color: "white",
              fontWeight: 400,
            }}
          >
            {props.title}
          </Typography>
          <Typography
            components="p"
            variant="h3"
            align="center"
            color="common.white"
          >
            {props.subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroComponent;
