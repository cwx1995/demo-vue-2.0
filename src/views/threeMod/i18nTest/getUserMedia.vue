<template>
  <div class="body">	
      <div class="phone-body">
                <div class="phone-operate" @mousedown="onMousedown" @touchstart.prevent="onMousedown" @mouseup="onMouseup" @touchend.prevent="onMouseup">{{btnText}}</div>
                <video playsinline class="video-operate" ref="video"  @click="showVideo(false)" @touchend.prevent="showVideo(false)"></video>
          </div>
  </div>
</template>

<script>
export default {
  data () {
        return {
            chunks: [],
            chunkList: [],
            btnText: '点击录制',
            index: 0,
            recorder:'',
            stream:''

        }
    },
    beforeDestroy() {
        console.log(window.stream,'window.stream')
        // if (window.stream) {
        //     window.stream.getTracks().forEach(track => {
        //         track.stop();
        //     });
        // }
        // navigator.mediaDevices.getUserMedia({audio: false, video: false})
    },
    mounted () { 
        this.video = this.$refs.video;
        this.getAudio();
    },
    methods: {
          getAudio() {
    if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
      this.getUserMedia({audio: true , video: true}); // 调用用户媒体设备，访问摄像头、录音、
    } else {
      console.log("你的浏览器不支持访问用户媒体设备");
    }
  },
    getUserMedia(constrains) {
      let that = this;
      if (navigator.mediaDevices.getUserMedia) {
          console.log('11111')
        // 最新标准API、
        navigator.mediaDevices.getUserMedia(constrains).then(stream => { that.success(stream); }).catch(err => { that.error(err); });
      } else if (navigator.webkitGetUserMedia || navigator.mozGetUserMedia) {
          console.log('2222')
        // webkit内核浏览器
        if (navigator.mediaDevices === undefined) {
            console.log('3333')
          navigator.mediaDevices = {};
        }

        // 一些浏览器部分支持 mediaDevices。我们不能直接给对象设置 getUserMedia
        // 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
        if (navigator.mediaDevices.getUserMedia === undefined) {
            console.log('4444')
          navigator.mediaDevices.getUserMedia = function(constraints) {

            // 首先，如果有getUserMedia的话，就获得它
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
            if (!getUserMedia) {
              return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }

            // 否则，为老的navigator.getUserMedia方法包裹一个Promise
            return new Promise(function(resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject);
            });
          }
        }
        navigator.mediaDevices.getUserMedia(constrains).then(stream => {
          that.success(stream);
        }).catch(err => {
          that.error(err);
        });
      } else if (navigator.getUserMedia) {
          console.log('5555')
        // 旧版API
        navigator.getUserMedia(constrains).then(stream => { that.success(stream); }).catch(err => { that.error(err); });
      }
    },
    // 成功的回调函数
    success(stream) {
      console.log("已点击允许,开启成功");
      this.recorder = new MediaRecorder(stream);
       this.stream = stream;
        this.bindEvents();
    },
    // 异常的回调函数
    error(error) {
      console.log("访问用户媒体设备失败：", error.name, error.message);
    },
		// 按下
        onMousedown () {
            this.showVideo(true);
            this.onPreview();
            this.btnText = '松开结束';
            this.onStart(); 
        },
			// 松开
        onMouseup () {
            this.onStop();
            this.btnText = '按住拍视频';
			      this.showVideo(false);
        },
		// 视频展示
        onPreview () {
            this.video.srcObject = this.stream;
            this.video.muted = true;
            this.video.play();
        },
		// 是否显示视频div
        showVideo (bShow) {
            if(bShow) {
                this.video.style.display = 'block';
            } else {
                this.video.style.display = 'none';
				this.video.pause();
            }
        },
			// 开始录制
        onStart () {
            this.recorder.start();
        },
		// 停止录制
        onStop () {
            this.recorder.stop();

        },
		// 录制 
        onPlay (index) {
            this.showVideo(true);
            let item = this.chunkList[index];
            this.video.src = item.stream;
            this.video.muted = false;
            this.video.play();
            this.bindAudioEvent();
        },
        bindAudioEvent () {
            this.video.onended = () => {
                this.showVideo(false);
            }
        },
		// 事件绑定
        bindEvents () {
            this.recorder.ondataavailable = this.getRecordingData;
            this.recorder.onstop = this.saveRecordingData;
        },
		// 获取视频文件
        getRecordingData (e) {
            this.chunks.push(e.data);
        },
		// 保存视频文件
        saveRecordingData  () {
            let blob = new Blob(this.chunks, { 'type' : 'video/webm' }),
                videoStream = URL.createObjectURL(blob);
            this.chunkList.push({stream: videoStream});
			console.log(this.chunkList,'chunkList')
            // this.onCapture(this.index);        
            this.chunks = [];
        },

        //获取视频截图
        // onCapture (index) {
        //     let item = this.chunkList[index];
        //     this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
        //     this.canvas.toBlob((blob) => {
        //         let src = URL.createObjectURL(blob);
        //         this.$set(item, 'poster', src);
        //     });
        //     //索引后移
        //     this.index ++;

        //     //隐藏video
        //     this.showVideo(false);
        //     this.video.srcObject = null;
        // }

    }
}
  

</script>

<style lang="scss" scoped>
.body{
	width: 100%;
	height: 100vh;
	background-color: #fff;
}
.phone-body {
	
}
.video-operate{
	width: 400px;
	height: 300px;
	border-radius: 50%;
	position: absolute;
	top: 50px;
	left: 50%;
	margin-left: -200px;
}
.phone-operate{
	width: 100px;
	height: 100px;
	background-color: aqua;
	position: absolute;
	bottom: 0;
	left: 50%;
}






</style>