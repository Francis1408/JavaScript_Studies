
let userAgent = navigator.userAgent;
let audio = document.getElementById('playAudio');
let iframe = document.getElementById('iframeAudio');

if (userAgent.match(/chrome|chromium|crios/i)) {
    audio.remove();
}
else {
    iframe.remove();
}