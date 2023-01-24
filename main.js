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

Classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3DctCFBnA/model.json", modelLoaded);

function modelLoaded() 
{
    console.log("The model has been loaded");
}

function gesture()
{
    image = document.getElementById("image");
    Classify.classify(image, gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        
        if(prediction_1 == "Cool")
        {
            document.getElementById("emoji").innerHTML = "&#129304;";
            var Speak = window.speechSynthesis;
            speak_1 = "Thats so cool";
            var text_to_speak = new SpeechSynthesisUtterance(speak_1);
            Speak.speak(text_to_speak);
        }

        if(prediction_1 == "Amazing")
        {
            document.getElementById("emoji").innerHTML = "&#128076;";
            var Speak = window.speechSynthesis;
            speak_1 = "Thats Amazing";
            var text_to_speak = new SpeechSynthesisUtterance(speak_1);
            Speak.speak(text_to_speak);
        }

        if(prediction_1 == "Victory")
        {
            document.getElementById("emoji").innerHTML = "&#9996;";
            var Speak = window.speechSynthesis;
            speak_1 = "That was a marvelous victory";
            var text_to_speak = new SpeechSynthesisUtterance(speak_1);
            Speak.speak(text_to_speak);
        }

        if(prediction_1 == "Excellent")
        {
            document.getElementById("emoji").innerHTML = "&#128077;";
            document.getElementById("emoji").innerHTML = "&#9996;";
            var Speak = window.speechSynthesis;
            speak_1 = "That was excellent";
            var text_to_speak = new SpeechSynthesisUtterance(speak_1);
            Speak.speak(text_to_speak);
        }

        if(prediction_1 == "Angry")
        {
            document.getElementById("emoji").innerHTML = "&#9994;";
            document.getElementById("emoji").innerHTML = "&#9996;";
            var Speak = window.speechSynthesis;
            speak_1 = "My mum looks so angry";
            var text_to_speak = new SpeechSynthesisUtterance(speak_1);
            Speak.speak(text_to_speak);
        }

        if(prediction_1 == "Clapping")
        {
            document.getElementById("emoji").innerHTML = "&#128079;";
            document.getElementById("emoji").innerHTML = "&#9996;";
            var Speak = window.speechSynthesis;
            speak_1 = "Be happy, everyone is clapping for you";
            var text_to_speak = new SpeechSynthesisUtterance(speak_1);
            Speak.speak(text_to_speak);
        }
    }
}

