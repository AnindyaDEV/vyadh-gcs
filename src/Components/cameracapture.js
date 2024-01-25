
import React, { useRef, useState } from "react";

const CameraCaptureComponent = () => {
  const videoRef = useRef(null);
  const capturedImageRef = useRef(null);

  const [stream, setStream] = useState(null);

  const startVideo = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = newStream;
      setStream(newStream);
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };

  const stopVideo = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      setStream(null);
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  
      const capturedDataURL = canvas.toDataURL('image/png');
      capturedImageRef.current.src = capturedDataURL;
  
      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = capturedDataURL;
      downloadLink.download = 'captured_image.png';
  
      // Trigger the download
      downloadLink.click();
  
      // Check if the download link exists before attempting to remove it
      if (document.body.contains(downloadLink)) {
        // Clean up the download link
        document.body.removeChild(downloadLink);
      }
    }
  };
  

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Camera Capture</h1>
      <video ref={videoRef} id="video" autoPlay playsInline style={{ width: '100%', marginBottom: '10px' }}></video>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <button className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[45px] font-red-hat-mono text-white" onClick={startVideo}>Start Video</button>
        <button className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[45px] font-red-hat-mono text-white" onClick={stopVideo}>Stop Video</button>
        <button className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[100px] h-[45px] font-red-hat-mono text-white" onClick={pauseVideo}>Pause Video</button>
        <button className="rounded-xl hover:bg-deepskyblue focus:ring-2 focus:bg-deepskyblue cursor-pointer [border:none] p-0 bg-steelblue-200 w-[120px] h-[45px] font-red-hat-mono text-white" onClick={captureImage}>Capture Image</button>
      </div>
      <img ref={capturedImageRef} id="capturedImage" alt="Captured Frame" style={{ width: '100%', borderRadius: '8px' }} />
    </div>
  );
};

export default CameraCaptureComponent;
