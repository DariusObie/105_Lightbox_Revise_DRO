let containerBox = document.getElementById('container');
let popUp = document.getElementById('popup');
let images = document.querySelectorAll('.picture');
// gets container, popup and all images to do something with them //

let popUpImg = document.getElementById('imgBx');
// gets invisible image box in the popup //
for (let i = 0; i < images.length; i++){
    images[i].onclick = function(){
        //adds click listener to each image//
        popUp.style.display = 'block';
        popUpImg.src = this.src;
        containerBox.style.display = 'none';
        document.body.style.backgroundColor = 'black';
        // upon click, function makes pic popup and the background//
    }
}


let closer = document.getElementById('x');
closer.onclick = function(){
    popUp.style.display = 'none';
    containerBox.style.display = 'flex';
    document.style.backgroundColor = '#purple';
};