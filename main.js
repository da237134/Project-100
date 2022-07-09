var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}


camera = document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 310,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function save() {


    var synth = window.speechSynthesis;
    Webcam.attach('#camera');

    speak_data = "Taking you1r next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    function setTimeout() {
        var image = image 
        speak_data_1 = "1, 2, 3, 4, 5";
        var utterThis_2 = new SpeechSynthesisUtterance(speak_data_1);
        synth.speak(utterThis_2);
        take_snapshot();
    }

}

take_snapshot() 
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}