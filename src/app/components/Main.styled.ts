"use client";

import styled from "styled-components";

const MainStyled = styled.main`
  a {
    overflow: hidden;
    border-radius: 5px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: unset;
    max-width: unset;

    @media (width>480px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (width>720px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MainStyled;