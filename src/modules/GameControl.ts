import Snake from './Snake'
import ScorePanel from './ScorePanel'
import Food from './Food'
class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  //   创建一个属性来存储蛇的移动方向
  direction: string = ''
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }
  //   游戏初始化,调用后立即开始
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
  }
  /* 
    ArrowUp UP
  */
  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    // console.log(event.key)
    // 需要检测event.key的值是否合法

    // 修改direction
    this.direction = event.key
  }
}

export default GameControl
