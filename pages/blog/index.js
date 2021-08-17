import { Container, Heading, Box, Grid, Text } from "@chakra-ui/react";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

export default function BlogIndex({ posts }) {
  return (
    <Container maxW="container.xl" mt="12">
      <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
        {posts.map((post) => (
          <Link
            key={post.filePath}
            as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
            href={`/blog/[slug]`}
            passHref
          >
            <Box as="a" borderWidth="1px" borderRadius="lg" p="4">
              <Heading as="h4" size="md">
                {post.data.title}
              </Heading>
              <Text>{post.data.description}</Text>
            </Box>
          </Link>
        ))}
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
