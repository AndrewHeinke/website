import { Container, Heading, Box, Grid, Text } from "@chakra-ui/react";

import fs from "fs";
import matter from "gray-matter";
import path from "path";
import BlogPostCard from "components/BlogPostCard";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

export default function BlogIndex({ posts }) {
  return (
    <Container maxW="container.xl" mt="12">
      <Heading as="h1">Blog</Heading>
      <Text>A collection of my thoughts, projects and process.</Text>
      <Grid
        templateColumns="repeat(auto-fit, minmax(350px, 1fr))"
        gap={6}
        mt="4rem"
      >
        {posts.map((post, index) => {
          return <BlogPostCard key={index} post={post} />;
        })}
      </Grid>
    </Container>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
