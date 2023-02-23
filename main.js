var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
    Recognition.start();
}
Recognition.onresult = function (event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "tire minha selfie") {
        console.log("tirando selfie em 5s");
        speak();
    }
}

Webcam.set({
    width:500,
    height:400,
    image_format:'jpeg',
    jpeg_quality:90
});

function speak() {
    var synth = window.speechSynthesis;
    speakData = "Tirando Minha Selfie em 5 segundos";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(document.getElementById("camera"));
    setTimeout(function () {
     takeSelfie();
     console.log("selfie1")
     setTimeout(function () {
        takeSelfie2();
        console.log("selfie2")
        setTimeout(function () {
            takeSelfie3();
            console.log("selfie3")
           }, 5000);
       }, 5000);
    }, 5000);
}

function takeSelfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado").innerHTML = '<img id="selfieImage"  style="width:90%;height:90%;box-shadow: 0 6px 8px 0 rgba(2, 2, 2, 0.2); src="'+data_uri+'"/>';
    });
}
function takeSelfie2()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado2").innerHTML = '<img id="selfieImage"  style="width:90%;height:90%;box-shadow: 0 6px 8px 0 rgba(2, 2, 2, 0.2); src="'+data_uri+'"/>';
    });
}
function takeSelfie3()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("resultado3").innerHTML = '<img id="selfieImage"  style="width:90%;height:90%;box-shadow: 0 6px 8px 0 rgba(2, 2, 2, 0.2); src="'+data_uri+'"/>';
    });
}