
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    image_quality:90
})

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });

        console.log("'ml5 version:' , ml5 version");

        classifer=
ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/R2U1I2Wv_/model.json',modelLoaded);

function modelLoaded() {
    console.log('modelLoaded!');
}


function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 =  " The first prediction is : "  + predicition_1;
    speak_data_2 =  " The second predicition is : " + predicition_2;
    var utterThis = new speechSynthesisisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
