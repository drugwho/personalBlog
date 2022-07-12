import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import {Footer} from "../components/Footer"
import Container from "../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const colorSecondary1 = {
    light: "green.500",
    dark: "green.600",
  };
  return (
    <Container>
      <Head>
        <title>Home - Raghu Ganapathy</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2} mt={7}>
            Hi, I'm Raghu Ganapathy
          </Heading>
          <Text color={colorSecondary[colorMode]}>
          <span color={colorSecondary1[colorMode]}>Developer. Designer. Musician. </span>⚡
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            Hey! Welcome to my website. I am a driven individual who is passionate about developing software to efficiently solve real-world problems. 
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            I am currently a student at 👨‍🎓{" "}
            <a href="https://www1.cs.ucr.edu/graduate/programs/computer-science-masters" target="_blank" style={{textDecoration: "underline"}}>
              The University Of California, Riverside
            </a>
            , pursuing a full-time Masters' In Computer Science degree.
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            I am proficient in JavaScript and Python, and have experience in
            product development using application frameworks in production. I have previously worked as Software Developer at <a href="https://www.atherenergy.com/" target="_blank" style={{textDecoration: "underline"}}>
              Ather Energy
            </a>, building bleeding-edge solutions for problems in the <span>EV mobility space.</span>
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            In my free time I play the 🎸 for my band <a href="https://www.instagram.com/oceanswithinband" target="_blank" style={{textDecoration: "underline"}}>Oceans Within</a>. I also enjoy long drives and 🍕. 
          </Text>
          <br />
          <Text color={colorSecondary1[colorMode]}>
            <a onClick={()=>{window.open(`mailto:raghu.1999@gmail.com?subject=+Hey!`, '_blank');}} style={{textDecoration: "underline", cursor:"pointer"}} >Contact me to work for you!</a>
          </Text>
        </Flex>
        {/* <footer
          style={{
            position: "fixed",
            left: "0",
            bottom: "0",
            marginBottom: "10px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Text color={colorSecondary[colorMode]}>
            {new Date().getFullYear()}, made with love ❤️ by Raghu.{" "}
          </Text>
        </footer> */}
        <Footer/>
      </Stack>
    </Container>
  );
}
