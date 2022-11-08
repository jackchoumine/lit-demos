import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('hello-lit')
export class HelloLit extends LitElement {
  render() {
    return html` <div id="chart" style="width:100%,height:600px"></div> `
  }
}
∏