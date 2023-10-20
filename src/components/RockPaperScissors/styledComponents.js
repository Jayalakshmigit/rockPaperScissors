import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
  padding: 20px;
  background-size: cover;
`

export const RulesViewContainer = styled.div`
  align-self: flex-end;
  margin-top: auto;

  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const PopUpViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vw;
  padding: 10px;

  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`

export const PopUpImage = styled.img`
  height: 100%;
  width: 90%;
  margin-top: auto;
`
