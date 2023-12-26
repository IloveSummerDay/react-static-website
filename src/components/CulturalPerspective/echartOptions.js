export const echartOptions = province => {
  console.log(Object.keys(province))
  console.log(Object.values(province))

  return {
    title: {
      text: '中国各省份非遗种类数量分布'
    },
    tooltip: {},
    xAxis: {
      data: Object.keys(province),
      axisLabel: {
        interval: 0,
        rotate: -40
      }
    },
    yAxis: {},
    series: [
      {
        name: '非遗数量',
        type: 'bar',
        data: Object.values(province).map(el => el.sum),
        itemStyle: {
          color: '#AA3432' // 将柱状图的颜色改为蓝色
        }
      }
    ]
  }
}
