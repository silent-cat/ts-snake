import Snake from './Snake'
import ScorePanel from './ScorePanel'
import Food from './Food'
class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  //   创建一个属性来存储蛇的移动方向
  direction: string = ''
  // 活着与死亡
  isLive = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }
  //   游戏初始化,调用后立即开始
  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this))

    this.move()
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
  // 移动
  move() {
    //   根据方向来改变蛇的位置
    //获取蛇的坐标
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 20
        break
      case 'ArrowDown':
      case 'Down':
        Y += 20
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 20
        break
      case 'ArrowRight':
      case 'Right':
        X += 20
        break
    }
    this.snake.X = X
    this.snake.Y = Y

    //开启定时调用
    this.isLive &&
      setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }
}

export default GameControl
