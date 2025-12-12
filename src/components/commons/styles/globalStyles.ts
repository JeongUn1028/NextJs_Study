import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: myfont, sans-serif;
  }

  @font-face {
    font-family: "myfont";
    src: url(('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap'));
  }
`;
