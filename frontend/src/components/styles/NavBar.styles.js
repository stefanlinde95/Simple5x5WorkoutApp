import styled from "styled-components";

export const NavBarStyle = styled.div`
  header {
    color: #fff;
    transition: 0.5s;
    background-color: #181925;
  }

  header a {
    color: #fbfbfb;
  }

  header a:hover {
    transition: 0.5s;
    text-decoration: underline;
  }

  .user {
    margin: auto 0px auto auto;
    text-transform: capitalize;
    padding-right: 25px;
  }
`;
