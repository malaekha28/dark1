let body = document.body;

let darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;
let info = document.getElementById('mode');
let home = document.getElementById('home');

function darkMode(){
    if(darkRemainingLeft == 0){
        alert('kesempatan anda sudah habis');
        info.style.display = 'none';
        home.textContent = 'Restart';
        return;
    }

    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;

    console.log("berhasil di klik sebanyak ", darkCounter);
    console.log('Kesempatan anda tersisa ', darkRemainingLeft );
    body.classList.toggle('dark');
}

function reRender() {
    location.reload();
}