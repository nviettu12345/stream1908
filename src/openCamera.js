function openCamera(){
		navigator.mediaDevices.getUserMedia({audio:false,video:true})
	.then(stream => {
		 const video = document.getElementById('localStream');
		 video.srcOject=stream;
		 video.onloadedmetadata=function(){
		 	video.play();
		 };
	})
	.catch(err => console.log(err));
}

module.exports=openCamera;