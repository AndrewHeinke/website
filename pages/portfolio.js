import {
  Text,
  Container,
  Grid,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import ProjectCard from "components/ProjectCard";

function Portfolio() {
  return (
    <Container maxW="container.xl" mt="12">
      <Heading mb="4">Portfolio</Heading>
      <Text fontSize="xl" mb="8">
        Curious about my latest professional projects?{" "}
        <Link
          color={useColorModeValue("purple.600", "purple.300")}
          lineHeight="1.5"
          _hover={{
            textDecoration: "underline",
          }}
          href="mailto:andrew.j.heinke@gmail.com"
        >
          Send me an email
        </Link>
        , let's chat.
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={6}>
        <ProjectCard
          title="Elderly"
          description="A web application to connect elderly people with local volunteers."
          image="/images/elderly.jpg"
          link="http://pacific-hamlet-23272.herokuapp.com/"
        />
        <ProjectCard
          title="LineUp"
          description="See how long the line is before you vote. This web app uses geofencing to verify crowdsourced voting on the length of lines."
          image="/images/lineup.jpg"
          link="https://pure-scrubland-81366.herokuapp.com/"
        />
        <ProjectCard
          title="Clash Royale RPG"
          description="Prepare for battle, play my Clash Royale inspired role playing game!"
          image="/images/clash-royale.jpg"
          link="http://andrewheinke.github.io/week-4-game/"
        />
        <ProjectCard
          title="NBA Trivia"
          description="Test your NBA knowledge on my trivia challenge, fair warning it's hard!"
          image="/images/nba-trivia.jpg"
          link="http://andrewheinke.github.io/TriviaGame/"
        />
        <ProjectCard
          title="Pokemon Hangman"
          description="Do you want to be the very best? Test your knowledge with this hangman game."
          image="/images/pokemon.jpg"
          link="http://andrewheinke.github.io/week-3-game/"
        />
        <ProjectCard
          title="Eat Da Burger"
          description="A simple app to create and eat burgers. Utlizes MySQL database and Sequelize Nodejs package"
          image="/images/hamburger.jpg"
          link="http://immense-garden-11246.herokuapp.com/burgers"
        />
      </Grid>
    </Container>
  );
}

export default Portfolio;
