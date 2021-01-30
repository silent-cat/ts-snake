class Snake {
  head: HTMLElement //表示蛇头的的元素
  bodies: HTMLCollection //表示蛇身
  snake: HTMLElement
  constructor() {
    this.snake = document.getElementById('snake')!
    this.head = document.querySelector('#snake>div') as HTMLElement
    this.bodies = this.snake.getElementsByTagName('div')
  }

  //   获取蛇的坐标
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }
  //   设置蛇头的坐标
  set X(val: number) {
    // 如果新值和旧值相同,则直接返回不再修改
    if (this.X === val) {
      return
    }
    if (val < 0 || val > 380) {
      throw new Error('蛇撞墙了')
    }
    //修改x时，修改的是水平座标，蛇向左移动时，不能向右掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val) {
      // 如果发生了掉头，让蛇反方向继续移动
      if (val > this.X) {
        // 如果新值val大于旧值val,说明蛇在向右走，此时掉头，蛇依然向左走
        val = this.X - 20
      } else {
        val = this.X + 20
      }
    }
    //移动身体
    this.moveBody()

    this.head.style.left = val + 'px'
    this.checkHeadBody()
  }
  set Y(val: number) {
    if (this.Y === val) {
      return
    }
    if (val < 0 || val > 380) {
      throw new Error('蛇撞墙了')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val) {
      if (val > this.Y) {
        val = this.X - 20
      } else {
        val = this.Y + 20
      }
    }
    this.moveBody()

    this.head.style.top = val + 'px'
    this.checkHeadBody()
  }

  //   增加身体
  addBody() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }

  //移动身体
  moveBody() {
    // 将后边的身体设置为前边身体的位置
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop

      // 键值设置到当前身体上
      ;(this.bodies[i] as HTMLElement).style.left = X + 'px'
      ;(this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
  }
  // 检查是否撞到自己
  checkHeadBody() {
    // 获取所有的身体，检查是否和蛇头的坐标发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 进入判断说明蛇头撞到了身体，游戏结束
        throw new Error('撞到自己了')
      }
    }
  }
}

export default Snake
