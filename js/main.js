/* 
    //window load event
    //function display image
        select meme image, add click event
        replace image src
    //function display top text
        select text, add click event
    //function display bottom text
        select text, add click event
        add inner html

*/

window.addEventListener('load', function(e){
    const generateButton = document.querySelector('input[type=submit]')
    const selectImage = document.getElementById("meme-image");
    const resetButton = document.querySelector('input[type=reset]')
    let imageTopText = document.querySelector('.top-text');
    let imageBotText = document.querySelector('.bottom-text');
    let changeImage = document.querySelector('.meme-display img')
    displayImage();

    generateButton.addEventListener('click', function(e){  
        displayImage();     
        imageTopText.innerHTML = `${displayTopText()}`;    
        imageBotText.innerHTML = `${displayBotText()}`;
        e.preventDefault();       
    })
    
    resetButton.addEventListener('click', function(e){
        imageTopText.innerHTML = ``;
        imageBotText.innerHTML = ``;
        changeImage.src = `https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown`;
    })

    function displayImage(){      
        selectImage.addEventListener('change', function(e){                     
            let imageIndex = selectImage.selectedIndex;
            let imageValue = document.getElementsByTagName('option')[imageIndex].value;
            let imageLabel = document.getElementsByTagName('option')[imageIndex].label;
            
            if (imageIndex !== 0){
                document.querySelector('.error').innerHTML = ``;
                changeImage.src = `../img/${imageValue}.png`;
                changeImage.alt = `${imageLabel}`;
            }
            else{
                document.querySelector('.error').innerHTML = `Error, Please select an image`
            }
            
        }) 
    }

    function displayTopText(){
        const topText = document.getElementById('meme-top-text').value;
        return topText;
    }

    function displayBotText(){
         const botText = document.getElementById('meme-bottom-text').value;
         return botText;
    }
})