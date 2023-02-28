var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
var imgId = "";

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
    imgId = "selfie1" 
     takeSelfie();
    }, 5000);
    setTimeout(function () {
    imgId = "selfie2" 
         takeSelfie();
        }, 6000);
    setTimeout(function () {
    imgId = "selfie3" 
         takeSelfie();
        }, 7000);
    }


function takeSelfie()
{
    console.log(imgId)
    Webcam.snap(function(data_uri) {
        if (imgId == "selfie1"){
        document.getElementById("resultado").innerHTML = '<img id="selfie1"  style="width:500;height:400;" src="'+data_uri+'"/>';
       }  
       if (imgId == "selfie2"){
        document.getElementById("resultado2").innerHTML = '<img id="selfie2"  style="width:500;height:400;" src="'+data_uri+'"/>';
       }  
       if (imgId == "selfie1"){
        document.getElementById("resultado3").innerHTML = '<img id="selfie3"  style="width:500;height:400;" src="'+data_uri+'"/>';
       }  
    });
}