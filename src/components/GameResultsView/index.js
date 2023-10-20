import {
  GameResultViewContainer,
  GameButton,
  GameImage,
  ResultImageContainer,
  GameResultName,
  GameResultText,
} from './styledComponents'

import './index.css'

const GameResultsView = props => {
  const {
    choicesList,
    isShow,
    opponentRandomChoice,
    newArray,
    text,
    restartGame,
  } = props

  const showGame = () => (
    <GameResultViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => opponentRandomChoice(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => opponentRandomChoice(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => opponentRandomChoice(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}

      {!isShow && (
        <>
          <ResultImageContainer>
            <GameResultName>YOU</GameResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>

          <ResultImageContainer>
            <GameResultName>OPPONENT</GameResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>

          <ResultImageContainer>
            <GameResultText>{text}</GameResultText>

            <button
              className="result-button"
              type="button"
              onClick={restartGame}
            >
              PLAY AGAIN
            </button>
          </ResultImageContainer>
        </>
      )}
    </GameResultViewContainer>
  )

  return showGame()
}

export default GameResultsView
