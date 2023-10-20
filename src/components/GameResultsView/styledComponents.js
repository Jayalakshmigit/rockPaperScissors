import styled from 'styled-components/macro'

export const GameResultViewContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 400px;
  margin-top: 60px;

  @media screen and (max-width: 576px) {
    height: 250px;
    width: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  height: 150px;
  width: 150px;
  border-style: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`

export const GameImage = styled.img`
  height: 150px;
  width: 150px;

  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;

  @media screen and (max-width: 576px) {
    width: 30%;
  }
`

export const GameResultName = styled.p`
  color: #ffffff;
  font-size: 20px;

  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const GameResultText = styled.p`
  color: #ffffff;
  font-size: 25px;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ResultButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #223a5f;
  font-size: 10px;
  height: 28px;
  width: 100px;
  border-radius: 4px;
  outline: none;
  border-style: none;
`
