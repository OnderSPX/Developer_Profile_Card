document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('#card');
    const cardHeader = card.querySelector('header');
    const instagramBtn = document.querySelector('.instagram');
    const twitterBtn = document.querySelector('.twitter');
    const resetBtn = document.querySelector('.reset');
    let clicked = false;
    let startTop = card.offsetTop;
    let startLeft = card.offsetLeft;
    let offsetX, offsetY;

    cardHeader.addEventListener('mousedown', (e) =>{
        clicked = true;
        offsetX = e.clientX - card.offsetLeft;
        offsetY = e.clientY - card.offsetTop;
    });

    document.addEventListener('mouseup', () =>{
        clicked = false;
    });

    document.addEventListener('mousemove', (e) =>{
        if(!clicked) return;
        const { clientX, clientY  } = e;
        card.style.left = `${clientX - offsetX}px`;
        card.style.top = `${clientY - offsetY}px`;
    });

    function instagramPosition(){
        card.style.left = `${startLeft}px`;
        card.style.top = `${startTop}px`;
    }

    function twitterPosition(){
        card.style.left = `${startLeft}px`;
        card.style.top = `${startTop}px`;
    }

    function resetPosition(){
        card.style.left = `${startLeft}px`;
        card.style.top = `${startTop}px`;
    }

    instagramBtn.addEventListener('click', function() {
        window.open('https://instagram.com/spexron', '_blank');
        instagramPosition();
    });

    twitterBtn.addEventListener('click', function() {
        window.open('https://twitter.com/spexronn', '_blank');
        twitterPosition();
    });

    resetBtn.addEventListener('click', function() {
        resetPosition();
    });
});
