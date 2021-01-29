import './index.scss'
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'

// 测试
const food = new Food()
food.change()

const scorePanel = new ScorePanel(100, 2)
for (let i = 0; i < 20; i++) {
  scorePanel.addScore()
}
