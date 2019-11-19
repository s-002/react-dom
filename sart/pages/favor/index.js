//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banners: [
      '/assets/2.jpg',
      '/assets/58.jpg',
      '/assets/2.jpg',
      '/assets/58.jpg'
    ],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },
  checkboxChange(e){
    console.log(e)//'checkbox发生change事件，携带value值为：'
  }
})
