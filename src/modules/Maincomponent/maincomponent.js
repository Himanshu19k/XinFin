import React from "react";
import styled from "styled-components";
import { Row, Column } from "simple-flexbox";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 1500px;
  padding: 48px 70px 48px 70px;
  background-color: #f5f6f9;
`;
const Container = styled.div`
  justify-content: center;
  display: flex;
`;

const Title = styled.text`
  width: 106px;
  height: 21px;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #09184b;
`;

const Box = styled.div`
  width: 373px;
  height: 200px;
  margin: 18px 26px 51px 0px;
  padding: 25px 18px 25px 18px;
  border-radius: 5px;
  background-color: #ffffff;
`;
const Speedtitle = styled.text`
  width: 117px;
  height: 21px;
  margin: 0 199.1px 9px 0;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 600;
`;

const Speed = styled.text`
width: 78px;
  height: 26px;
  margin: 9px 238.1px 24px 0;
  font-family: Raleway;
  font-size: 22px;
  font-weight: 600;
  text-align: left;
  color: #3366ff;
`;
// Xinfin twitter
export default function MainComponent() {
  return (
    <MainContainer>
      <Container>
        <Row>
          <Column>
            <Title>
              Writing Data
              <Box>
                <Speedtitle>Saving Speed</Speedtitle>
                <Speed>135/Sec</Speed>
              </Box>
            </Title>
          </Column>
          <Column>
          <Title>
              Writing Data
              <Box>
                <Speedtitle>Saving Speed</Speedtitle>
              </Box>
            </Title>
          </Column>
        </Row>
      </Container>
    </MainContainer>
  );
}





