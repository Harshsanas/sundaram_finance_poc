import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Layout from "../../components/layout/Layout";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Container1 = styled.div`
  width: 50%;
  padding-top:3%;
  background: #c4dbf5;
`;

const Container2 = styled.div`
  width: 50%;
  padding-top:3%;
  background: #1d1e6b;
`;

const InnerDiv = styled.div`
  background: #fff;
  padding: 12%;
  width: 60%;
  position: relative;
  justify-content: right;
  height: 50vh;
  margin: 6% 0px auto 16%;
  border-radius: 15px 0px 0px 15px;
  h1 {
    color: #1d1e6b;
    text-align:center;
    padding:10%;
  }
  div {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #1d1e6b;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
  span {
    color: #1d1e6b;
    cursor: pointer;
  }
  button {
    background: #1d1e6b;
    color: white;
    text-align: center;
    font-size: 18px;
    width: 98.3%;
    outline: none;
    padding: 2%;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  form{
    margin-top:-25px;
  }
`;

const Outerdiv = styled.div`
  background: #fff;
  padding: 12%;
  width: 60%;
  position: relative;
  justify-content: right;
  height: 50vh;
  margin: 6% 16% auto 0px;
  opacity: 0.7;
  border-radius: 0px 15px 15px 0px;
  img {
    width: 140%;
    margin-left: -160px;
  }
`;

const Input = styled.input`
  width: 93%;
  padding: 2%;
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 5px;
`;

export default function Login() {
  return (
      <Wrapper>
        <Container1>
          <InnerDiv>
            <h1>Login Page</h1>
            <form>
              <Input
                placeholder="Enter Username"
                type={"text"}
                required
              />
              <Input
                placeholder="Enter password"
                type={"password"}
                required
              />{" "}
              <button>Login</button>
            </form>
          </InnerDiv>
        </Container1>
        <Container2>
          <Outerdiv>
            <img
              src="https://i.ibb.co/27SR4VS/undraw-project-team-lc5a.png"
              alt="img"
            />
          </Outerdiv>
        </Container2>
      </Wrapper>
  );
}
