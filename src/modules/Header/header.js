import React from "react";
import styled from "styled-components";
import { Row } from "simple-flexbox";
import "../styles/App.css";
import DarkMode from "../components/DarkMode";

const Container = styled.div`
  width: 100%;
  display:flex;
  height: 64px;
  background-color: #191d43;
  display: flex;
  flex-flow: row nowrap;
  
`;

const Div = styled.div`
 display: flex;
 
`;
const Image = styled.img`
  margin-left: 5%;
  width: 35px;
`;
const Span = styled.span`
  width: 139px;
  display:flex;
  font-size: 17px;
  margin-top: 2%;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;
const Search = styled.input`
  width: 373px;
  display:flex;
  height: 42px;
  margin-top: 1%;
  border-radius: 2px;
  background: #3d4271;
  border: none;
  font-family: WorkSans-Roman;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  padding-left: 1%;
  color: #adb1d6;
`;
const Button = styled.button`
  background: #3e49b8;
  display:flex;
  margin-top: 1%;
  width: 41px;
  height: 41px;
  border: none;
  border-radius: 2px;
  margin-left: 4px;
  padding-top: 4px;
  padding-left: 4px;
`;

const Advancesearch = styled.button`
  width: 155px;
  font-family: Raleway;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  text-align: left;
  color: #a7afff;
  background: transparent;
  margin-left: 5px;
  border: none;
`;

const About = styled.text`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
font-size: 15px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.19;
text-align: left;
color: #ffffff;
background: transparent;
margin-top: 22px;
margin-left: 234px;
}
`;

const Share = styled.menu`
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
font-size: 15px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: 1.19;
text-align: left;
color: #ffffff;
background: transparent;
margin-top: 22px;
`;

const Archive = styled.button`
  font-family: Raleway;
  width:137px;
  font-size: 15px;
  font-weight: 500;
  display:flex;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #a7afff;
  background: transparent;
  margin-top: 19px;
  border: none;
`;


/*const Lightmode = styled.img`
  margin-top: 2px;
  width: 58px;
  display:flex;
  margin-left: 0px;
`;*/
export default function HeaderComponent() {
  return (
    <Container>
      <Row>
        <Div>
        <Image src="../../images/TwitterS.svg" alt=" "/>
        </Div>
        <Div>
        <Span>Twitter D-App</Span>
        </Div>
        <Div>
        <Search type="text" placeholder="Search by Handle name, Hash tag" />
        </Div>
        <Div>
        <Button>
          <img src="../../images/Search.svg" alt=" " />
        </Button>
        </Div>
        <Div>
        <Advancesearch>Advance Search</Advancesearch>
        </Div>
        <Div>        
        <About>About</About>
        </Div>
        <Div>
        <Share>Share</Share>
        </Div>
       <Div> 
        <Archive href="#">Tweet Archive</Archive> 
        </Div>
       <Div>
        <DarkMode />
</Div>
      </Row>
    </Container>
  );
}


