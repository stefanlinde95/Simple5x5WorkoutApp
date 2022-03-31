import styled from "styled-components";

export const ModalStyle = styled.div`
  width: 100%;

  .wrapper {
    max-width: 350px;
    margin: auto;
    margin-top: 100px;
    padding: 15px;
    text-align: right;
  }

  .add {
    margin: auto;
    font-size: 1.5rem;
    padding: 10px 20px;
    transition: 0.5s;
  }

  .minus {
    margin: auto;
    font-size: 1.5rem;
    padding: 10px 23px;
    transition: 0.5s;
  }

  .weight {
    width: 150px;
    height: 150px;
    margin: auto;
  }

  .add:hover {
    transition: 1s;
    box-shadow: 5px 5px 25px grey;
    color: #fff;
    background: #000;
  }

  .minus:hover {
    transition: 1s;
    box-shadow: 5px 5px 25px grey;
    color: #fff;
    background: #000;
  }

  .confirm-btn {
    padding: 5px 10px 7px 10px;
    transition: 0.5s;
  }

  .confirm-btn:hover {
    background-color: #fff;
    color: #000;
    transition: 0.5s;
  }

  .weight input {
    max-width: 100%;
    margin: 0px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-bottom: 1px solid grey;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
`;
