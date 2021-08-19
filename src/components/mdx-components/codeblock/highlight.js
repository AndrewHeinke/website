import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";

function Basic({ codeString, language, ...props }) {
  return (
    <Highlight
      {...defaultProps}
      {...props}
      code={codeString}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre className="code-block">
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default Basic;
