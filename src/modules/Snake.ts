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
    this.head.style.left = val + 'px'
  }
  set Y(val: number) {
    if (this.Y === val) {
      return
    }
    if (val < 0 || val > 380) {
      throw new Error('蛇撞墙了')
    }
    this.head.style.top = val + 'px'
  }

  //   增加身体
  addBody() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }
}

export default Snake
