const work1= new Vue ({
  el: '#work1',
  data: { 
    docs: [
      { caption: "ペルソナ", pictuer: 'imgs/university/perusona.png' },
      { caption: "デザインカンプ", pictuer: 'imgs/university/university_web_design.png' },
      { caption: "サイト画像", pictuer: 'imgs/university/uni.png' },
      { caption: "スマホサイト画像", pictuer: 'imgs/university/uni-iphone.png' },
    ],
    flag: 0,
  },
  methods: {
    dispPicture(index){
      //console.log(this.flag);
      this.flag = index;
    }
  }
});

const work2= new Vue ({
  el: '#work2',
  data: { 
    docs: [
      { caption: "デザインカンプ", pictuer: 'imgs/saxphone/saxfon.png' },
      { caption: "サイト画面1", pictuer: 'imgs/saxphone/top.png' },
      { caption: "サイト画面2", pictuer: 'imgs/saxphone/SAXOPOHNE_index.png' },
    ],
    flag: 0,
  },
  methods: {
    dispPicture(index){
      this.flag = index;
    }
  }
});

const work3= new Vue ({
  el: '#work3',
  data: { 
    docs: [
      { caption: "設計図", pictuer: 'imgs/lyrics/designpng.png' },
      { caption: "ワークフレーム", pictuer: 'imgs/lyrics/wire_frame.png' },
      { caption: "デザインカンプ", pictuer: 'imgs/lyrics/design_camp.png' },
      { caption: "サイト画面", pictuer: 'imgs/lyrics/fullscreen.png' },
    ],
    flag: 0,
  },
  methods: {
    dispPicture(index){
      this.flag = index;
    }
  }
});

const work4= new Vue ({
  el: '#work4',
  data: { 
    docs: [
      { caption: "アプリ画面", pictuer: 'imgs/paycard/paycard.png' },
    ],
    flag: 0,
  },
  methods: {
    dispPicture(index){
      this.flag = index;
    }
  }
});

/*const work= new Vue ({
  el: '#work1',
  data: { 
    docs: [
      { caption: "設計図", pictuer: 'imgs/work1.png' },
      { caption: "設計図", pictuer: 'imgs/work2.png' },
      { caption: "設計図", pictuer: 'imgs/work3.png' },
      { caption: "設計図", pictuer: 'imgs/work4.png' },
      { caption: "設計図", pictuer: 'imgs/work1.png' },
    ],
    flag: 0,
  },
  methods: {
    dispPicture(index){
      this.flag = index;
    }
  }
});*/
