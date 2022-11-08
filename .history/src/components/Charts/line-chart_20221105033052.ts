import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('line-chart')
export class LineChart extends LitElement {
  render() {
    return html` <div></div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'line-chart': LineChart
  }
}
