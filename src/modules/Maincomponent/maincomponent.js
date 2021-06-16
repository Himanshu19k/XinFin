import React, { useState, useEffect , memo } from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";
import Themeprovider from "react"
import "../styles/App.css";

import MapChart from "../Map/mapcharts"

const MainContainer = styled.div`
  display: flex;

  flex-flow: nowrap;
  width: 100%;
  padding: 48px 70px 48px 70px;
  background-color: #f5f6f9;
`;
const Trending = styled.div`
  width: 470%;
  height: 536px;
  margin: 18px 26px 51px 0px;
  padding: 25px 18px 25px 18px;
  border-radius: 5px;
  background-color: #ffffff;
`;

const Node = styled.div`
  width: 920%;
  height: 270px;
  margin: 18px 26px 51px 0px;
  padding: 25px 18px 25px 18px;
  border-radius: 5px;
  background-color: #ffffff;
`;
const Title = styled.text`
  font-family: "Raleway", sans-serif !important;
  font-size: 17px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #09184b;
`;

const Box = styled.div`
  width: 281px;
  height: 176px;
  margin: 18px 26px 51px 0px;
  padding: 25px 18px 25px 18px;
  border-radius: 5px;
  background-color: #ffffff;
`;
const Speedtitle = styled.text`
  width: 411px;
  height: 21px;
  /* margin: 0; */
  font-family: "Raleway", sans-serif !important;
  font-size: 15px;
  font-weight: 600;
`;

const WSpeed = styled.text`
  width: 78px;
  height: 26px;
  margin: 9px 238.1px 24px 0;
  font-family: "Raleway", sans-serif !important;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #3366ff;
`;

const RSpeed = styled.text`
  width: 78px;
  height: 26px;
  margin: 9px 238.1px 0.3px 3px;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #10ca93;
`;
// Xinfin twitter

export default function MainComponent() {
  return (
    <MainContainer>
      <Column>
        <Row>
          <Column>
            <Title>Writing Speed</Title>
            <Box>
              <Column>
                <Speedtitle>Saving Speed</Speedtitle>
                <WSpeed>345/Sec</WSpeed>
              </Column>
            </Box>
          </Column>
          <Column>
            <Title>Reading Speed</Title>
            <Box>
              <Column>
                <Speedtitle>Saving Speed</Speedtitle>
                <RSpeed>345/Sec</RSpeed>
              </Column>
            </Box>
          </Column>
        </Row>
        <Row>
          <Column>
            <Title>Nodes</Title>
            <Node></Node>
          </Column>
        </Row>
      </Column>
      <Column>
        <Title>Top 20 Trending</Title>
        <Trending>
          <MapChart/>
        </Trending>
      </Column>
    </MainContainer>
  );
}
