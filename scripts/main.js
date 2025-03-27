const myImage=document.querySelector('img')


myImage.addEventListener('click',
    ()=>{
        const mySrc=myImage.getAttribute('src');
        console.log(mySrc)
        if(mySrc === 'images/firefox-icon.png'){
            myImage.setAttribute('src','images/My Image.png');
        } else{
            myImage.setAttribute('src','images/firefox-icon.png');
        }
    }
);


let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt("Please Enter your name");
    if (!myName){
        myName='The user does not want to enter a name'
    }
    localStorage.setItem('name',myName);
    myHeading.textContent = `My new user: ${myName}`;
}

//Initialize with the name if it is not stored in the browser yet, else show the old name which is already present
if(!localStorage.getItem('name')){
    setUserName();
} else {
    const storedName=localStorage.getItem('name');
    myHeading.textContent = `My old user: ${storedName}`;
}


myButton.addEventListener('click',
    ()=>{
        setUserName();
    }
)