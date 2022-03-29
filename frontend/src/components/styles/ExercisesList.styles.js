import styled from "styled-components";

export const ExercisesListStyle = styled.div`
  width: 1000px;
  max-width: 100%;
  margin: 0px auto 50px auto;
  padding: 25px;
  color: #08080c;
  .bg-dark {
    background-color: #181925;
  }
  h1 {
    color: #fbfbfb;
  }
  .react-calendar button {
    padding: 17px 0px;
    color: #fff;
  }

  .react-calendar__navigation {
    display: flex;
    text-align: center;
  }

  .react-calendar__navigation .react-calendar__navigation__arrow {
    margin: 5px 25px;
    font-size: 25px;
  }

  .react-calendar__navigation .react-calendar__navigation__arrow:hover {
    cursor: pointer;
  }

  .react-calendar__navigation__label {
    font-size: 1.25rem;
  }

  abbr:where([title]) {
    text-decoration: none;
  }

  abbr:hover {
    cursor: default;
  }

  .react-calendar button:hover {
    cursor: default;
  }

  .react-calendar__viewContainer button {
    pointer-events: none !important;
  }

  .highlight {
    background-color: #21a5fd40;
    border-radius: 10px;
    padding: 15px 20px;
  }

  .delete-btn {
    color: red;
    transition: 0.5s;
  }

  .delete-btn:hover {
    transition: 0.5s;
  }

  ul {
    list-style: none;
    padding-left: 0px;
  }

  ul li {
    margin-bottom: 5px;
  }

  .date {
    margin-bottom: 15px;
    color: grey;
  }

  .workout-type {
    margin-bottom: 0px;
  }

  @media only screen and (max-width: 750px) {
    .react-calendar button {
      padding: 15px 0px;
      color: #fff;
    }

    .react-calendar__navigation .react-calendar__navigation__arrow {
      margin: 5px 5px;
      font-size: 25px;
    }
  }

  @media only screen and (min-width: 750px) {
  }
`;
