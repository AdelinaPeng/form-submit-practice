// index.js
Page({
  data: {
    name: '',
    gender: [],
    skills: [],
    opinion: ''
    // name: '张三',
    // gender: [
    //   { name: '男', value: '0', checked: true },
    //   { name: '女', value: '1', checked: false }
    // ],
    // skills: [
    //   { name: 'HTML', value: 'html', checked: true },
    //   { name: 'CSS', value: 'css', checked: true },
    //   { name: 'Javascript', value: 'js', checked: false },
    //   { name: 'Photoshop', value: 'ps', checked: false}
    // ],
    // opinion: '测试'
    
  },
  submit(e){
    console.log('提交',e)
    wx.request({
      method: 'post',
      url: 'http://127.0.0.1:3000/',
      data: e.detail.value,
      success: (res) => {
        console.log(res)
      }
    })
  },
  onLoad() {
    wx.request({
      url: 'http://127.0.0.1:3000/',
      success: (res)=>{
        console.log('get',res);
        this.setData(res.data)
      }
    })
  }
})
