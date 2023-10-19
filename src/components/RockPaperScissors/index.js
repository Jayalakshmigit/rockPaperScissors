import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import ScoreView from '../ScoreView'
import GameResultsView from '../GameResultsView'

import './index.css'

import {
  AppContainer,
  RulesViewContainer,
  PopUpViewContainer,
  PopUpImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    text: 'YOU WON',
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
  }

  getGameResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU LOSE'
        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  checkResult = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachValue => eachValue.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const gameResult = this.getGameResult(choice1[0], choice2)

    let newScore = score
    if (gameResult === 'YOU WON') {
      newScore = score + 1
    } else if (gameResult === 'YOU Lose') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: false,
      score: newScore,
      newArray: [choice1[0], choice2],
      text: gameResult,
    })
  }

  render() {
    const {isShow, score, text, newArray} = this.state
    return (
      <AppContainer>
        <ScoreView score={score} />
        <GameResultsView
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newArray={newArray}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />
        <RulesViewContainer>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                RULES
              </button>
            }
          >
            {close => (
              <PopUpViewContainer>
                <button
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <PopUpImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopUpViewContainer>
            )}
          </Popup>
        </RulesViewContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
