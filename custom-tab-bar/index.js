
Component({
  data: {
    selected:0,
    "color": "#a9b7b7",
    "selectedColor": "#000000",
    "borderStyle": "white",
    "list": [
      {
        "selectedIconPath": "/images/homeY.png",
        "iconPath": "/images/homeN.png",
        "pagePath": "/pages/index/index",
        "text": "首页"
      },
      {
        "heigher":true,
        "selectedIconPath": "/images/addY.jpg",
        "iconPath": "/images/addN.jpg",
        "pagePath": "/pages/add/add",
        "text": "添加"
      },
      {
        "selectedIconPath": "/images/myY.png",
        "iconPath": "/images/myN.png",
        "pagePath": "/pages/my/my",
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      this.setData({
        selected:data.index
      })
      wx.switchTab({url})
    }
  }
})