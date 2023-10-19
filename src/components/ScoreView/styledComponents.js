import styled from 'styled-components/macro'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background-color: transparent;
  border-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  margin-top: 2%;
`
export const NameAndScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GameHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ScoreBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  width: 15%;
  border: none;
  background-color: #ffffff;

  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 0px;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 40px;
  font-family: 'Roboto';
  font-weight: 700;
  margin-bottom: 0px;

  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
