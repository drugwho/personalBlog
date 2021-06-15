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
    light: "gray.400",
    dark: "gray.100",
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
            Artist. Designer. Coder. ⚡
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            Hey! Welcome to my website. I am a driven individual who thrives on
            staying up to date by learning all the latest technologies, and
            implementing my knowledge to solve real world problems.
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            I am currently a software intern at 🛵{" "}
            <a href="https://www.atherenergy.com" target="_blank" style={{textDecoration: "underline"}}>
              Ather Energy
            </a>
            , solving problems and developing solutions and products in the EV
            space.
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            I am proficient in JavaScript and Python, and have experience in
            product development using application frameworks in production. I am
            currently learning Kotlin and Haskell.
          </Text>
          <br />
          <Text color={colorSecondary[colorMode]}>
            In my free time I play the 🎸 for my band <a href="https://www.instagram.com/oceanswithinband" target="_blank" style={{textDecoration: "underline"}}>Oceans Within</a>. I also enjoy long drives and 🍕. 
          </Text>
          <br />
          <Text color={colorSecondary1[colorMode]}>
            <i>This website is under construction.</i>
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
