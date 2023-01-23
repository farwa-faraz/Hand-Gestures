prediction_1 = " ";

Webcam.set({
    width:300,
    height:300,
    image_format: "png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image" src="'+data_uri+'">';
    })
}

console.log("ml5 version is:", ml5.version);

classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3DctCFBnA/model.json", modelLoaded);

function modelLoaded() 
{
    console.log("The model has been loaded");
}

function speak()
{
    var Speak = window.speechSynthesis;
    speak_1 = "The first prediction is" + prediction_1;
    var text_to_speak = new SpeechSynthesisUtterance(speak_1);
    Speak.speak(text_to_speak);
}