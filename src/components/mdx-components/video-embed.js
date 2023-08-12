import * as React from "react";
import { AspectRatio } from "@chakra-ui/react";

export const VideoEmbed = (props) => {
  const { src, title, ...restOfProps } = props;
  return (
    <AspectRatio maxW="560px" ratio={16 / 9} my="8" {...restOfProps}>
      <iframe
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
};
