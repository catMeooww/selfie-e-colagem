var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
var TextBox = document.getElementById("textbox");

function start() {
    Recognition.start();
}
Recognition.onresult = function (event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    //TextBox.innerHTML = content;
    console.log(content);
    if (content == "tire minha selfie") {
        console.log("tirando selfie em 5s");
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speakData = "Tirando Minha Selfie em 5 segundos";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function () {
     takeSelfie();
     setTimeout(function () {
        takeSelfie2();
        setTimeout(function () {
            takeSelfie3();
           }, 1000);
       }, 1000);
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function takeSelfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado1").innerHTML = '<img id="selfieImage"  style="box-shadow: 0 6px 8px 0 rgba(2, 2, 2, 0.2); src="'+data_uri+'"/>';
    });
}
function takeSelfie2()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado2").innerHTML = '<img id="selfieImage"  style="box-shadow: 0 6px 8px 0 rgba(2, 2, 2, 0.2); src="'+data_uri+'"/>';
    });
}
function takeSelfie3()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado3").innerHTML = '<img id="selfieImage"  style="box-shadow: 0 6px 8px 0 rgba(2, 2, 2, 0.2); src="'+data_uri+'"/>';
    });
}