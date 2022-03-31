import styled from "styled-components";

export const WorkoutStyle = styled.div`
  width: 500px;
  max-width: 100%;
  margin: auto;
  padding: 25px;
  color: #fbfbfb;
  margin-bottom: 50px;

  #workout li {
    color: #08080c;
    background: #181925;
    border-color: #000;
  }

  #warmup-btn {
    cursor: pointer;
  }

  .text-grey {
    color: #fff;
    opacity: 0.5;
  }

  .logged-exercise {
    margin-bottom: 25px;
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
  }

  .workout-type {
    margin-bottom: 0px;
  }

  .sets {
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .workout-heading p {
    font-size: 28px;
  }

  .workout-heading .button {
    margin-top: 26px;
  }

  .m-auto {
    margin: auto;
  }

  .my-auto {
    margin-top: auto;
    margin-bottom: auto;
  }

  .mt-10 {
    margin-top: 10px;
  }

  .pr-10 {
    padding-right: 10px;
  }

  .ps-10 {
    padding-left: 10px;
  }

  .switch-btn {
    cursor: pointer;
    transition: 0.5s;
  }

  .switch-btn:hover {
    background-color: #000;
    color: #fff;
    transition: 0.5s;
  }

  .space-around {
    justify-content: space-around;
  }

  .finish-btn {
    padding: 5px 14px;
    margin: 15px 0px;
    font-size: 16px;
    transition: 0.5s;
  }

  .finish-btn:hover {
    background-color: #009fb7;
    color: #fff;
    transition: 0.5s;
  }

  .submit-btn {
    padding: 5px 15px;
    border-radius: 10px;
    transition: 0.5s;
  }

  .submit-btn:hover {
    background-color: #000;
    color: #fff;
    transition: 0.5s;
  }

  .bg-transparent {
    background: transparent;
    background-color: transparent;
  }

  form input {
    border: none;
    pointer-events: none;
    width: 100%;
  }

  form .h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  form .weight {
    font-size: 1.25rem;
    text-align: right;
    -moz-appearance: none;
  }

  .edit-btn {
    cursor: pointer;
  }

  form .kg {
    // margin-left: -15px;
    background: #181925;
  }

  @media (max-width: 768px) {
    form .kg {
      margin-left: 0px;
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  form .exercise-wrapper {
    margin: 25px 0px;
    padding: 15px 40px;
    background: rgba(76, 168, 200, 0.35);
    border-radius: 25px;
    box-shadow: 5px 5px 25px #cdcdcd;
  }

  form .button {
    padding: 13px 20px;
    border: solid 1px grey;
    border-radius: 50px;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .bg-transparent {
    background: transparent;
    background-color: transparent;
  }
`;
