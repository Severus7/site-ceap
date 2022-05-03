import Image from "next/image";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import HeroComponent from "../components/HeroComponent";
import headerImage from "../public/images/headerImage.jpg";

export default function Home() {
  return (
    <Layout>
      <HeroComponent
        imgSrc={headerImage}
        imgAlt="church"
        title="Welcome to CORE"
        subtitle="Educational website"
      />
      <Container
        sx={{
          borderLeft: "1px solid #bdbdbd",
          borderRight: "1px solid #bdbdbd",
          borderBottom: "1px solid #bdbdbd",
        }}
      >
        {/* VISION */}
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
        <Box sx={{ paddingBottom: "50px" }}>
          <Typography component="h3" variant="h3" gutterBottom>
            Mission
          </Typography>
          <List sx={{ listStyleType: "disc" }}>
            <ListItem>
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  fontWeight: "100",
                  textAlign: "justify",
                  // display: "list-item",
                }}
              >
                To strengthen solidarity among member schools through catholic
                education
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "100", textAlign: "justify" }}
              >
                To champion relevant, inclusive and transformative catholic
                education - sentire cum ecclesia
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component="h5"
                variant="h5"
                sx={{ fontWeight: "100", textAlign: "justify" }}
              >
                To be catalysts of change through dialogue, collaboration and
                education in the different dimension of human life
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Container>
      <Container
        sx={{
          borderLeft: "1px solid #bdbdbd",
          borderRight: "1px solid #bdbdbd",
        }}
      >
        <Box sx={{ padding: "70px 0 50px 0" }}>
          <Typography component="h3" variant="h3" gutterBottom>
            Partners
          </Typography>
          <Typography
            component="h5"
            variant="h5"
            sx={{ fontWeight: "100", textAlign: "justify" }}
          >
            Insert Partner logos
          </Typography>
        </Box>
      </Container>
    </Layout>

    // <div className={styles.container}>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{" "}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{" "}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  );
}
