var slideCounter = 0
var tiktok
var hints = false
// ---------------------CLUE1
var Year = 0
var carCodex = 0
var carCodeStr = 0
// ---------------------CLUE1
// ---------------------CLUE2
var phoneCall
var caller
var callerName
// ---------------------CLUE2
// ---------------------CLUE3
var test = []
// ---------------------CLUE3
// ---------------------CLUE6
var width
var area
// ---------------------CLUE6
// ---------------------CLUE7
var captive
// ---------------------CLUE7
//==================TIMER==================
function timer(thisId, limit) {
    var second = 0
    var min = 0
    tiktok = setInterval(() => {
        second++
        if (second == 60) {
            min++
            second = 0
        }
        document.getElementById(thisId).innerHTML = min + " : " + second
        if (min == limit) {
            clearInterval(tiktok)
            alert('You Lose')
            document.getElementById('slideSd').pause()
        }
    }, 1000);
}
//=========================================

// ---------------------------Magic Effects---------------------------//
function slideLeft(thisId) {
    const selector = document.getElementById(thisId)
    selector.classList.add('magictime', 'slideLeftReturn')
}
function tinLeft(thisId) {
    const selector = document.getElementById(thisId)
    selector.classList.add('magictime', 'tinLeftIn')
}
function tinRight(thisId) {
    const selector = document.getElementById(thisId)
    selector.classList.add('magictime', 'tinRightIn')
}
function spaceInLeft(thisId) {
    const selector = document.getElementById(thisId)
    selector.classList.add('magictime', 'spaceInLeft')
}
function spaceInRight(thisId) {
    const selector = document.getElementById(thisId)
    selector.classList.add('magictime', 'spaceInRight')
}
function tinUpIn(thisId) {
    const selector = document.getElementById(thisId)
    selector.classList.add('magictime', 'tinUpIn')
}
// setTimeout(slideLeft, 1000);
//-----------------------------------------------------//

// ======================Onclick Events==============================//
function labelOver(thisId) {
    document.getElementById(thisId).style.display = "block"
    tinUpIn(thisId)
}
function labelOut(thisId) {
    x = document.getElementById(thisId)
    x.style.display = "none"
    x.setAtribute("class", "")
}
function playVid() {
    vid = document.getElementById('initial-vid')
    vid.play()
    aud = document.getElementById('initial-audio')
    aud.play()
    // document.getElementById('overlay').style.background = '#06060675';
    document.getElementById('overlay').innerHTML = `<input type="text" id="name" autocomplete="off"><div class="games"><ul><li id="game1" onclick="game1Start()" onmouseover="labelOver('g1')" onmouseout="labelOut('g1')"></li><li id="game2"></li><li id="game3"></li><li id="game4"></li></ul></div>`;
    slideLeft('name')
    tinLeft('game1')
    tinRight('game4')
    spaceInLeft('game2')
    spaceInRight('game3')
}
function game1Start() {
    document.getElementById('overlay').innerHTML = ""
    document.getElementById('initial').style.width = "0%"
    document.getElementById('game1Main').style.width = "100%"
    document.getElementById('slide1').style.width = "100%"
    document.getElementById('initial-audio').pause()
    document.getElementById('slideSd').play()
}
function slides() {
    var S1 = document.getElementById('slide1')
    var S2 = document.getElementById('slide2')
    var S3 = document.getElementById('slide3')
    document.getElementById('slideSd').pause()
    document.getElementById('slideSd').play()
    if (slideCounter == 0) {
        S1.style.width = "0%"
        S2.style.width = "100%"
        ++slideCounter
    }
    else {
        S2.style.width = "0%"
        S3.style.width = "100%"
    }
}
function slide4() {
    document.getElementById('clue1').style.width = '0%'
    document.getElementById('slide4').style.width = '100%'
    document.getElementById('timer').style.visibility = 'hidden'
    document.getElementById('Hints').style.visibility = 'hidden'
}
// //////////////////////////////CLUE NO 01///////////////////////
function birth() {
    let ranodomNum = Math.floor(Math.random() * 6) + 1
    Year = 1999 + ranodomNum
    // alert(Year)
    document.getElementById('clues').innerHTML = 'Where in this situation you found some clues which may be levaved by "Chaos".Here you got a birth certificate with the year of <span class="visible">' + Year + '</span> and a Computer asking for the password: ( Password Hint: My age in days ). You must have to get into the PC to find more Clues'
    document.getElementById('hintsList').innerHTML += '<li> Birth Year: ' + Year + '</li>'
}
function clue1() {
    document.getElementById('slide3').style.width = '0%'
    document.getElementById('clue1').style.width = '100%'
    document.getElementById('timer').style.visibility = 'visible'
    timer('timer', 3)
    document.getElementById('tiktik').play()
    document.getElementById('Hints').style.visibility = 'visible'
}
function carCode() {
    let a = Math.floor(Math.random() * 300) + 1
    let b = Math.floor(Math.random() * 60) + 1
    let c = Math.floor(Math.random() * 100) + 1
    let d = Math.floor(Math.random() * 100) + 1
    carCodex = a * b + c - d
    carCodeStr = a + " x " + b + " + " + c + " - " + d
    document.getElementById('hintsList').innerHTML += '<li> CODE : ' + carCodeStr + '</li>'
}
function passwordCheck() {
    if (document.getElementById('pwd').value == (2020 - Year) * 365) {
        carCode()
        document.getElementById('Screen').innerHTML = '<h1> CODE: <span class="black">' + carCodeStr + '</span></h1>'
        clearInterval(tiktok)
        document.getElementById('Clue1Pro').style.visibility = 'visible'
    } else {
        document.getElementById('Screen').innerHTML = `<h1> Incorrect Password </h1><button onclick="ChangeScreen()">Retry</button>`
    }
}
function ChangeScreen() {
    document.getElementById('Screen').innerHTML = `<span>Can You guess the password</span><input type="password" placeholder="password" id="pwd"><button onclick="passwordCheck()">Done</button>`
}
function viewHints() {
    if (hints == true) {
        document.getElementById('hintsList').style.width = '200px'
        document.getElementById('hintsList').style.height = 'fit-content'
        hints = false
    } else {
        document.getElementById('hintsList').style.width = '0px'
        document.getElementById('hintsList').style.height = '0px'
        hints = true
    }
}
// ====================================================//
// ====================CLUE NO 2=======================//
function slide4Html() {
    phoneCall = [
        ['jad', 1014],
        ['feg', 657],
        ['tom', 201513],
        ['zyu', 262521],
        ['kij', 11910]
    ]
    caller = Math.floor(Math.random() * phoneCall.length)
    callerName = phoneCall[caller][0]
    document.getElementById('hintsList').innerHTML += '<li> Caller: ' + phoneCall[caller][1] + '</li>'
    document.getElementById('clues2').innerHTML = 'On returning towards the garage you find "Chaos" mobile phone the last call recieved with the name of caller is <span class="visible">' + phoneCall[caller][1] + '</span>. As "Chaos" behaves as a detactive therfore he stores all his information encrypted. Now, you have to decrypt the last caller to find the other evidences.'
}
function clue2() {
    document.getElementById('slide4').style.width = '0%'
    document.getElementById('clue2').style.width = '100%'
    timer('timer', 5)
    document.getElementById('timer').style.visibility = 'visible'
    document.getElementById('Hints').style.visibility = 'visible'
}
function callerCheck() {
    let y = (document.getElementById('callerName').value).toLowerCase()
    if (y == callerName) {
        slide5()
    } else {
        document.getElementById('error').innerHTML = "No, " + y.toUpperCase() + " is not involve in this matter"
        document.getElementById('error').style.display = 'block'
        tinUpIn('error')
        setTimeout(() => {
            document.getElementById('error').innerHTML = ""
            document.getElementById('error').style.display = 'none'
            document.getElementById('error').setAttribute('class', 'errorMsg')
        }, 2000)
    }
}
// ///////////////////////////////////////////CLUE no 3///////////////////////////
function slide5() {
    clearInterval(tiktok)
    document.getElementById('timer').style.visibility = 'hidden'
    document.getElementById('Hints').style.visibility = 'hidden'
    document.getElementById('clue2').style.width = '0%'
    document.getElementById('slide5').style.width = '100%'
    document.getElementById('slide5p').innerHTML = '<span class="visible">' + callerName.toUpperCase() + '</span> accepts that he calls "Chaos" last time. he also accepts that he involve in his kidnapping but for more clues he ask you to solve a mathematical problem for him.'
}
function callerSequence() {
    document.getElementById('slide5').style.width = '0%'
    document.getElementById('clue3').style.width = '100%'
    document.getElementById('timer').style.visibility = 'visible'
    document.getElementById('Hints').style.visibility = 'visible'
    timer('timer', 4)
}
function clue3Checker() {
    let perfect = false
    let x = document.getElementsByClassName('sequence')
    for (let i = 0; i < x.length; i++) {
        let y = [4, 16, 36, 64, 100]
        if (x[i].value == y[i]) {
            perfect = true;
            test.push((y + 2) ** 2)
        } else {
            perfect = false;
            break
        }
    }
    if (perfect == true) {
        slide6()
    } else {
        document.getElementById('error').innerHTML = "You did something wrong!"
        document.getElementById('error').style.display = 'block'
        tinUpIn('error')
        setTimeout(() => {
            document.getElementById('error').innerHTML = ""
            document.getElementById('error').style.display = 'none'
            document.getElementById('error').setAttribute('class', 'errorMsg')
        }, 2000)
    }
}
// ******************************************************
function onDone(close, open) {
    clearInterval(tiktok)
    document.getElementById('timer').innerHTML = ''
    document.getElementById('timer').style.visibility = 'hidden'
    document.getElementById('Hints').style.visibility = 'hidden'
    document.getElementById(close).style.width = '0%'
    document.getElementById(open).style.width = '100%'
}
// ******************************************************

// ///////////////////////////CLUE NO 04///////////////////////
function slide6() {
    onDone('clue3', 'slide6')
    document.getElementById('hintsList').innerHTML += '<li>'+ callerName +': 4163664100</li>'
    document.getElementById('slide6p').innerHTML = callerName.toUpperCase() + ': Thank You so much, this is the code <span class="visible">(4163664100)</span> which will helps you to get to the "Chaos". He also told that the code you get from the "Chaos" computer is the authentication code for his car. You should grab the car and follow the map to get him.'
}
function inTheCar() {
    document.getElementById('slide6').style.width = '0%'    
    document.getElementById('clue4').style.width = '100%'    
    timer('timer', 5)
    document.getElementById('timer').style.visibility = 'visible'
    document.getElementById('Hints').style.visibility = 'visible'
}
function drive() {
    if (document.getElementById('carcaode').value == carCodex) {
        onDone('clue4', 'slide7')
        document.getElementById('slide7p').innerHTML = 'The map leads you toward <span class="visible">Brutto`s</span> palace on Kivishy mountain. It is impossible to get into palace through the main door. Therefore, by using an special code you can go through by a secret way.'
    } else {
        document.getElementById('error').innerHTML = "You did something wrong!"
        document.getElementById('error').style.display = 'block'
        tinUpIn('error')
        setTimeout(() => {
            document.getElementById('error').innerHTML = ""
            document.getElementById('error').style.display = 'none'
            document.getElementById('error').setAttribute('class', 'errorMsg')
        }, 2000)
    }
}
// /////////////////////////////CLUE NO 05//////////////////////
// function slide7() {

// }
function secretDoor() {
    document.getElementById('timer').style.visibility = 'visible'
    document.getElementById('Hints').style.visibility = 'visible'   
    document.getElementById('slide7').style.width = "0%"
    document.getElementById('clue4').style.width = "0%"
    timer('timer', 2)
    document.getElementById('clue5').style.width = "100%"   
    document.getElementById('door').play()    
}
function openSecretDoor() {
    width = Math.floor(Math.random()*100) + 1
    area = width*(Math.floor(Math.random()*200) + 1)
    document.getElementById('hintsList').innerHTML += '<li>Width: '+ width +'</li>' + '<li>Area: '+ area +'</li>' 
    if(document.getElementById('doorcaode').value == '4163664100') {
        onDone('clue5', 'slide8')
        document.getElementById('slide8p').innerHTML = 'After opening the door you got a big hole filled with water with the width of <span class="visible">' + width + '</span> and area of <span class="visible">'+ area +'</span>. To proceed further you must have to cross this there you ned a wooden plank can you suggest the length of wooden plank'
    } else {
        document.getElementById('error').innerHTML = "You did something wrong!"
        document.getElementById('error').style.display = 'block'
        tinUpIn('error')
        setTimeout(() => {
            document.getElementById('error').innerHTML = ""
            document.getElementById('error').style.display = 'none'
            document.getElementById('error').setAttribute('class', 'errorMsg')
        }, 2000)
    }
}
// /////////////////////////////CLUE NO 06//////////////////////
function crossBridge() {
    document.getElementById('timer').style.visibility = 'visible'
    document.getElementById('Hints').style.visibility = 'visible'   
    document.getElementById('slide8').style.width = "0%"
    timer('timer', 3)
    document.getElementById('clue6').style.width = "100%"   
    document.getElementById('inwater').play()    
}
function bridgeDone() {
    if(document.getElementById('bridgeLength').value == (area/width)) {
        onDone('clue6', 'slide9')
        let roomNo = 'One Fourth of 2 + Half of 6 + One Sixth of 54 - One Ninth of 81'
        document.getElementById('hintsList').innerHTML += '<li>Room: '+ roomNo +'</li>' 
        document.getElementById('slide9p').innerHTML = `At last you enter in the castle. Now the first thing is to find that where 'Chaos' has been captivated. On moving farward you hear some voices of feet and two men talking about a hostage was captivated in room no <span class="visible">`+ roomNo +`</span>.`
    } else {
        document.getElementById('error').innerHTML = "You did something wrong!"
        document.getElementById('error').style.display = 'block'
        tinUpIn('error')
        setTimeout(() => {
            document.getElementById('error').innerHTML = ""
            document.getElementById('error').style.display = 'none'
            document.getElementById('error').setAttribute('class', 'errorMsg')
        }, 2000)
    }
}

// /////////////////////////////CLUE NO 07//////////////////////
function clue7() {
    document.getElementById('timer').style.visibility = 'visible'
    document.getElementById('Hints').style.visibility = 'visible'   
    document.getElementById('slide9').style.width = "0%"
    timer('timer', 3)
    document.getElementById('clue7').style.width = "100%"        
}
function captiveDoorCheck() {
    if(document.getElementById('captive').value == 21.5) {
        onDone('clue7', 'slide10')
        document.getElementById('slide10p').innerHTML = `The door has opened now, and you saw that `+ callerName +` has captivated there. He is looking insensible and bound with the chair there was a lock on this, with a code may be by completing the code you get over it.`
    } else {
        document.getElementById('error').innerHTML = "No Dear! not that door"
        document.getElementById('error').style.display = 'block'
        tinUpIn('error')
        setTimeout(() => {
            document.getElementById('error').innerHTML = ""
            document.getElementById('error').style.display = 'none'
            document.getElementById('error').setAttribute('class', 'errorMsg')
        }, 2000)
    }
}
// /////////////////////////////CLUE NO 07//////////////////////
function chairCode() {
    document.getElementById('timer').style.visibility = 'visible'
    document.getElementById('Hints').style.visibility = 'visible'   
    document.getElementById('slide10').style.width = "0%"
    timer('timer', 5)
    document.getElementById('clue8').style.width = "100%"        
    let a = [1, 3, 5, 7, 9]
    let b = [2, 4, 6, 8, 10]
    let c = [4, 16, 36, 64, 100]
    let d = [1, 27, 125, 343, 729]
    let e = [8, 64, 216, 512, 1000]
    let variable = Math.floor(Math.random()*5) + 1
    switch(variable) {
        case 1:
            again(a, 'oddClass');
            break;
        case 2:
            again(b, 'evenClass')
            break;
        case 3:
            again(c, 'evenClass')
            break;
        case 4:
            again(d, 'oddClass')
            break;
        case 5:
            again(e, 'evenClass')
            break;
    }
    function again(arr, thisClass) {
        let x = document.getElementsByClassName(thisClass)
        for(var i=0; i < arr.length; i++) {
            x[i].value = arr[i]
            x.disabled = true
        }
    }
}