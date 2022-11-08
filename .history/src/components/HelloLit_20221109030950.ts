import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

export type Person = { name: string; age: number }

@customElement('hello-lit')
export class HelloLit extends LitElement {
  @property({ type: String }) name = ''
  @property({ type: Array }) attry = []
  render() {
    return html`<div>
      <h2>${this.name}</h2>
      <h3>测试数组</h3>
      <ul>
        ${this.array?.map(item:any => {
          return html`<li>${item.name}</li>`
        })}
      </ul>
    </div>`
  }
}
