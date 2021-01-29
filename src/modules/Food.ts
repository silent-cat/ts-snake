// 定义实物类
class Food {
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('food')!
  }

  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }

  change() {
    let left = Math.round(Math.random() * 19) * 20
    let top = Math.round(Math.random() * 19) * 20

    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

export default Food
