const myImage=document.querySelector('img')


const initial_image='images/Generic Profile Picture.JPG';

// Set the initial image source
function setInitialImage() {
    myImage.setAttribute('src', initial_image);
    myImage.setAttribute('alt', 'Generic Profile Picture');
    myImage.setAttribute('title', 'Generic Profile Picture');
    myImage.style.border = '2px solid black';
    myImage.style.borderRadius = '10px';
}

function setDarthy(){
    myImage.setAttribute('src','images/Darthy.png');
    myImage.setAttribute('alt','Darthy');
    myImage.setAttribute('title','Darthy');
    myImage.style.border='none';
}

myImage.addEventListener('click',
    ()=>{
        const mySrc=myImage.getAttribute('src');
        if(mySrc === initial_image){
            setDarthy();
        } else{
            setInitialImage();
        }
    }
);


let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
let nameNotEnteredText='The user does not want to enter a name';

function setUserName(){
    let myName=prompt("Please Enter your name");
    if (!myName){
        myName=nameNotEnteredText
        myHeading.textContent = myName;
    }
    else{
        myHeading.textContent = `My new user: ${myName}`;
    }
    localStorage.setItem('name',myName);
}

//Initialize with the name if it is not stored in the browser yet, else show the old name which is already present
if(!localStorage.getItem('name')){
    setUserName();
} else {
    const storedName=localStorage.getItem('name');
    if(storedName==nameNotEnteredText){
        myHeading.textContent = storedName;
    }
    else{
        myHeading.textContent = `My old user: ${storedName}`;
    }
}


myButton.addEventListener('click',
    ()=>{
        localStorage.removeItem('name');
        setUserName();
    }
)