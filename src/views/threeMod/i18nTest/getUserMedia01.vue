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
    methods: {
		// 开启权限
        requestAudioAccess () {
            navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(stream => {
                this.recorder = new MediaRecorder(stream);
                this.stream = stream;
                this.bindEvents();
            }, error => {
                alert('出错，请确保已允许浏览器获取音视频权限');
            });
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

    },

    mounted () {
        if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
 }
if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function (constraints) {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
	if (!getUserMedia) {
	    return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
	}
	return new Promise(function (resolve, reject) {
		getUserMedia.call(navigator, constraints, resolve, reject);
	});
  }
}
        // if (!navigator.mediaDevices) {
        //     alert('您的浏览器不支持获取用户设备');
        //     return;
        // }
		//   if (!window.MediaRecorder) {
        //     alert('您的浏览器不支持录音');
        //     return;
        // }
        this.video = this.$refs.video;
        this.requestAudioAccess();
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