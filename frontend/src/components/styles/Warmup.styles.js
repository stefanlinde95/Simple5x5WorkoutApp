import styled from "styled-components";

export const WarmupStyle = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  color: #08080c;

  #warmup li {
    background: #181925;
    border-color: #000;
  }

  .sets {
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .button {
    padding: 13px 20px;
    border: solid 1px grey;
    border-radius: 50px;
  }

  ul .question {
    font-size: 0.75rem;
    color: grey;
    padding: 0px 6px;
    border-radius: 999px;
  }
`;
