import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

export type Person = { name: string; age: number }

@customElement('hello-lit')
export class HelloLit extends LitElement {
  @property({ type: Person[] })
  render() {
    return html``
  }
}
