function Start() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('teachablemachine.withgoogle.com/models/Sm0xU0akc/model.json', ModelReady);
}

function ModelReady() {
    classifier.classify(gotResults);
    console.log('Model Ready');
}

function gotResults(error, results) {  
    if( error )
    console.error(error);
    
    else {
        console.log(results);
        var random_number_red = Math.floor(Math.random() * 255) + 1;
        var random_number_green = Math.floor(Math.random() * 255) + 1;
        var random_number_blue = Math.floor(Math.random() * 255) + 1; 

        document.getElementById('result_sound').innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById('result_confidence').innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + ' % ';
        document.getElementById('result_confidence').style.color = 'rgb (' + random_number_red + ', ' + random_number_green + ', ' + random_number_blue + ')';
        document.getElementById('result_sound').style.color = 'rgb (' + random_number_red + ', ' + random_number_green + ', ' + random_number_blue + ')';

        var img1 = document.getElementById('alien1');
        var img2 = document.getElementById('alien2');
        var img3 = document.getElementById('alien3');
        var img4 = document.getElementById('alien4');

        if(results[0].label = 'Clap') {
            img1.src = 'aliens-01.gif';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
        }
        else if (results[0].label = 'Shake') {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
        }
        else if (results[0].label = 'Snap') {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';
        }
        else {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.gif';
        }

} 




}