const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass video to element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error
        console.log('whooops! There is an error:', error)
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // start PiP
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// onload
selectMediaStream();