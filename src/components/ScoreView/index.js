import {
  ScoreContainer,
  NameAndScoreContainer,
  GameHeading,
  ScoreBoardContainer,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreContainer>
      <NameAndScoreContainer>
        <GameHeading>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </GameHeading>
      </NameAndScoreContainer>
      <ScoreBoardContainer>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoardContainer>
    </ScoreContainer>
  )
}

export default ScoreView
