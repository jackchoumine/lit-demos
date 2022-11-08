import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hello-lit')
export class HelloLit extends LitElement {
  @property({ type: Array })
  render() {
    return html``
  }
}
