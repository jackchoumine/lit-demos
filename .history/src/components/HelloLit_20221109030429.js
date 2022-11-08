import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'




@customElement('line-chart')
export class HelloChart extends LitElement {
  @property({ type: Array })


  render() {
    return html` <div id="chart" style="width:100%,height:600px"></div> `
  }
}
