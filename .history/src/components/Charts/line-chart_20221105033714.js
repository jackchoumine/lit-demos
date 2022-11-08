import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import * as echarts from 'echarts/core'

// import type { DatasetOption } from 'echarts/types/dist/shared'



// https://blog.csdn.net/weixin_39503495/article/details/116987982

const defaultOptions: EChartsOption = {
  backgroundColor: '#fdfdfd', // 图形背景色
  title: {
    text: '', // 图形标题
  },
  legend: {},
  dataZoom: [
    {
      startValue: '0', // 从开始
    },
    // {
    //   type: 'inside'
    // }
  ],
  toolbox: {
    // 是否有工具盒子
    // ['dataZoom','restore','saveAsImage','dataView']
    right: 10,
    feature: {
      // dataZoom: {
      //   yAxisIndex: 'none',
      //   title: {
      //     zoom: '观察局部',
      //     back: '还原',
      //   },
      // },
      // restore: {
      //   title: '刷新',
      // },
      dataView: {
        title: '原始数据',
        show: true,
        readOnly: true,
      },
      saveAsImage: {
        title: '保存图片',
        name: '折线图', // 导出图片的名字， 有标题，使用标题作为图片名字，否则使用折线图
      },
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: '5%',
    right: '5%',
    bottom: '10%',
  },
  dataset: {
    // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
    // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
    // 如果不指定 dimensions，也可以通过指定 series.encode
    // 完成映射，参见后文。
    dimensions: null,
    source: null,
  },
  xAxis: {
    type: 'category',
  },
  yAxis: {
    type: 'value',
    nameLocation: null, // start  middle end
    name: null,
    nameTextStyle: { color: null },
    max: 'dataMax',
  },
  series: [
    { type: 'line', smooth: true },
    { type: 'line', smooth: true },
    { type: 'line', smooth: true },
  ],
}

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('line-chart')
export class LineChart extends LitElement {
  @property({ type: Dimensions })
  dimensions
  @property() source: Source
  @property() height?: string | number = '700px'
  @property() width?: string | number = '100%'
  @property() backgroundColor?: string = '#fdfdfd'
  @property() chartTitle?: string | TitleComponentOption = ''
  @property() yName?: string = ''
  @property() yNameLocation?: 'start' | 'middle' | 'end' = 'end'
  @property() yNameColor?: string = '#000'

  render() {
    return html` <div></div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'line-chart': LineChart
  }
}
