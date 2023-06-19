// DB
// import firebase from cdn
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  onSnapshot,

  // USER AUTHENTIFICATION?
  /*
  createAnonymusUser,
  auth,
  updateUserDocument,
  listOnlineUsers,
  */

} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';


// config
const firebaseConfig = {

  /*
  // NEW DB API KEY
  apiKey: "AIzaSyCUGdgKzVb6_cJyav4V5U8EyO6iJNmZm0s",
  authDomain: "co-lab-16feb.firebaseapp.com",
  projectId: "co-lab-16feb",
  storageBucket: "co-lab-16feb.appspot.com",
  messagingSenderId: "827072280835",
  appId: "1:827072280835:web:210d9802f03c7286181136",
  measurementId: "G-SQRV99ZX8S"
  */
  

//OLD DB API KEY
    apiKey: "AIzaSyD5fO7vcmtPVbsruyOrF-YDmhNDKGg0LlI",
    authDomain: "co-lab-prj.firebaseapp.com",
    projectId: "co-lab-prj",
    storageBucket: "co-lab-prj.appspot.com",
    messagingSenderId: "983517005444",
    appId: "1:983517005444:web:783087360a20eeb4bba4d1",
    measurementId: "G-TBHR1NL4MF"

  
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize services
const db = getFirestore(app);

// COLLECTION REF
const colRef = collection(db, 'data');

// GET
// GET COLOR BG UPDATES
// subscribe to realtime updates for specific value (e.g. color)
const colorOutput = document.getElementById('colorBg');
const unsubscribeColorUpdates = onSnapshot(
  doc(db, 'data', 'colorbg'),
  (doc) => {

    // toggle Visiblity on Snapshot
    const textBlock = document.getElementById('textarea');
    textBlock.classList.remove('hidden');
    textBlock.classList.add('block');

    
    // get data from document snapshot
    const colorBgData = doc.data();
    
    //get Body with Id
    const bodyBg = document.getElementById('body');
    
    const colorBgDataTrans = colorBgData.value;
    //console.log("DB Color BG " + colorBgDataTrans);

    bodyBg.style.background = colorBgDataTrans;
    document.getElementById('colorBg').value = colorBgDataTrans;

    /*
    // check if color is defined and output color to html
    if (colorData) {
      colorOutput.innerHTML = JSON.stringify(colorData.value, null, 2);
    } else {
      colorOutput.innerHTML = 'no color value yet';
      console.log("No color yet");
    }
    */
  }
);

// GET
// GET COLOR TEXT UPDATES
// subscribe to realtime updates for specific value (e.g. color)
const colorTextOutput = document.getElementById('colorText');
const unsubscribeColorTextUpdates = onSnapshot(
  doc(db, 'data', 'colortext'),
  (doc) => {
    // get data from document snapshot
    const colorTextData = doc.data();

    //get  Textarea
    const textArea = document.getElementById('textarea');

    const colorTextDataTrans = colorTextData.value;
    //console.log("DB Text Color " + colorTextDataTrans);

    document.getElementById('textarea').style.color = colorTextDataTrans;
    document.getElementById('colorText').value = colorTextDataTrans;

    /*
    // check if color is defined and output color to html
    if (colorData) {
      colorOutput.innerHTML = JSON.stringify(colorData.value, null, 2);
    } else {
      colorOutput.innerHTML = 'no color value yet';
      console.log("No color yet");
    }
    */
  }
);

// GET HEIGHT UPDATES
// subscribe to realtime updates for specific value (e.g. color)
const heightOutput = document.getElementById('rangeHeight');
const unsubscribeHeightUpdates = onSnapshot(
  doc(db, 'data', 'lineheight'),
  (doc) => {
    // get data from document snapshot
    const heightData = doc.data();
    const textLineHeight = doc.data

    const heightDataTrans = heightData.value;
    //console.log("LINEHEIGHT DB: " + heightDataTrans);

    document.getElementById('textarea').style.lineHeight = heightDataTrans + "rem";
    document.getElementById('rangeHeight').value = heightDataTrans;
  }
);

// GET FONT SIZE UPDATES
// subscribe to realtime updates for specific value (e.g. color)
const sizeOutput = document.getElementById('rangeSize');
const unsubscribeSizeUpdates = onSnapshot(
  doc(db, 'data', 'fontsize'),
  (doc) => {
    // get data from document snapshot
    const sizeData = doc.data();
    const textFontSize = doc.data

    const sizeDataTrans = sizeData.value;
    //console.log("FONTSIZE DB: " + sizeDataTrans);

    document.getElementById('textarea').style.fontSize = sizeDataTrans + "rem";
    document.getElementById('rangeSize').value = sizeDataTrans;
  }
);

// TEXT SPACING UPDATES
const spacingOutput = document.getElementById('rangeSpace');
const unsubscribeSpacingUpdates = onSnapshot(
  doc(db, 'data', 'textspacing'),
  (doc) => {
    // get data from document snapshot
    const textSpaceData = doc.data();
    const textSpace = doc.data

    const textSpaceTrans = textSpaceData.value;
    //console.log("FONTSIZE DB: " + textSpaceTrans);

    document.getElementById('textarea').style.wordSpacing = textSpaceTrans + "rem";
    document.getElementById('rangeSpace').value = textSpaceTrans;
  }
);

// TEXT LETTER SPACING UPDATES
const letterOutput = document.getElementById('rangeLetter');
const unsubscribeLetterUpdates = onSnapshot(
  doc(db, 'data', 'letterspacing'),
  (doc) => {
    // get data from document snapshot
    const letterSpaceData = doc.data();
    const letterSpace = doc.data;

    const letterSpaceTrans = letterSpaceData.value;
    //console.log("FONTSIZE DB: " + letterSpaceTrans);

    document.getElementById('textarea').style.letterSpacing = letterSpaceTrans + "rem";
    document.getElementById('rangeLetter').value = letterSpaceTrans;
  }
);



// unsubscribe to updates by calling this function
// unsubscribeColorUpdates()


/*
// GET VALUES UPDATES
// subscribe to realtime updates for all elements in the values collection
const valuesOutput = document.getElementById('values-output');
const unsubscribeValueUpdates = onSnapshot(
  collection(db, 'data'),
  (snapshot) => {
    // get data from document snapshot
    const valuesSnapshot = snapshot;
    const values = valuesSnapshot.docs.map((doc) => doc.data());

    console.log("datafromsnapshot" + values);
    
    // output values to html
    // valuesOutput.innerHTML = JSON.stringify(values, null, 2);
    // console.log(values); 
  }
);

*/

// unsubscribe to updates by calling this function
// unsubscribeValueUpdates()

// POST
// add / replace document
async function addValue(id, value) {
  try {
    await setDoc(doc(collection(db, 'data'), id), {
      id: id,
      value: value
    });

    console.log('Document written with id ', id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// // FORMS
// // FORM FOR ADDIND / REPLACING COLOR
// const submitButton = document.getElementById('submit-btn');
// const colorInput = document.getElementById('colorBg');

// // add / replace color on form submit
// submitButton.addEventListener('click', (event) => {
//   console.log('click')
//   event.preventDefault();
//   const color = colorInput.value;
//   colorInput.value = '';
//   addValue('colorbg', color);
// });

// VARIABLE FOR SUBMIT BUTTON
const submitBtn = document.getElementById('submit-btn');

// VARIABLE FOR DATA VALUE
const eventTrigger = 'input';/* 'input';*/

// // THROTTLE 
// function throttle (callback, limit) {
//   console.log('throttle');
//   var waiting = false;                        // Initially, we're not waiting
//     return function () {                      // We return a throttled function
//         if (!waiting) {                       // If we're not waiting
//             // callback.apply(this, arguments);  // Execute users function
//             callback.call();                  // Execute users function
//             waiting = true;                   // Prevent future invocations
//             setTimeout(function () {          // After a period of time
//                 waiting = false;              // And allow future invocations
//             }, limit);
//         }
//     }
// }

// // NEW THROTTLE
// function throttle2(cb, delay = 1000) {
//   let shouldWait = false

//   return (...args) => {
//     if (shouldWait) return

//     cb(...args)
//     shouldWait = true
//     setTimeout(() => {
//       shouldWait = false
//     }, delay)
//   }
// }

// NEW NEW THROTTLE
// https://jsfiddle.net/jonathansampson/m7G64/

// Allow callback to run at most 1 time per 100ms
// window.addEventListener("resize", throttle(callback, 100));
// window.addEventListener("resize", callback2);

// // Throttled Event Count
// function callback ()  { console.count("Throttled");}

// // Non Throttled Event Count (Reference)
// function callback2 () { 
//   console.count("Not Throttled"); 
// }

function throttle (callback, limit) {
  //console.log("throttleFunction is working")
    var wait = false;                  // Initially, we're not waiting
    return function () {               // We return a throttled function
        if (!wait) {                   // If we're not waiting
            callback.call();           // Execute users function
            wait = true;               // Prevent future invocations
            setTimeout(function () {   // After a period of time
                wait = false;          // And allow future invocations
            }, limit);
        }
    }
}


// CHANGE VALUE
const backgroundColorInput = document.getElementById('colorBg');

function changeBackgroundColor () {
  const color = backgroundColorInput.value;
  console.count("throttled input")
  // addValue('colorbg', color);
}

function changeBackgroundColor2 () {
  const color = backgroundColorInput.value;
  console.count("non throttled input")
  // addValue('colorbg', color);
}

// add / replace color on form submit
backgroundColorInput.addEventListener(eventTrigger, throttle(changeBackgroundColor, 100));
backgroundColorInput.addEventListener(eventTrigger, changeBackgroundColor2);

// CHANGE TEXT COLOR
const textColorInput = document.getElementById('colorText');

function changeTextColor () {
  const textColor = textColorInput.value;
  console.count("input")
  // addValue('colortext', textColor);
}
function changeTextColor2 () {
  const textColor = textColorInput.value;
  console.count("not throttled input")
  // addValue('colortext', textColor);
}

// add / replace color on form submit
textColorInput.addEventListener(eventTrigger, throttle(changeTextColor, 100));
textColorInput.addEventListener(eventTrigger, changeTextColor2);

// textColorInput.addEventListener(eventTrigger, (event) => {
//   const textColor = textColorInput.value;
//   addValue('colortext', textColor);
// });

// LINE HEIGHT ON SLIDER SUBMIT
const lineHeightInput = document.getElementById('rangeHeight');

// Function that changes the text-size (which is throttled later on)
function changeLineHeight () {
  const lineHeight = lineHeightInput.value;
  console.count("LineHeightThrottled input")
  addValue('lineheight', lineHeight);
}

// Non Throttled TextSize Function
function changeLineHeight2 () {
  const lineHeight = lineHeightInput.value;
  console.count("LineHeightNonThrottled input")
  //addValue('lineheight', lineHeight);
}


lineHeightInput.addEventListener(eventTrigger, throttle(changeLineHeight, 100));
// Non Throttled TextSize
//lineHeightInput.addEventListener(eventTrigger, changeLineHeight2);

// // OLD FUNCTION
// lineHeightInput.addEventListener(eventTrigger, (event) => {
//   const lineHeight = lineHeightInput.value;
//   addValue('lineheight', lineHeight);
// });

// CHANGE FONT SIZE INPUT
// FORM FOR ADDIND / REPLACING RANGE SIZE
const sizeInput = document.getElementById('rangeSize');

// Function that changes the text-size (which is throttled later on)
function changeTextSize () {
  const size = sizeInput.value;
  console.count("TextSizeThrottled input")
  addValue('fontsize', size);
}

// Non Throttled TextSize Function
function changeTextSize2 () {
  const size = sizeInput.value;
  console.count("TextSizeNonThrottled input")
  //addValue('fontsize', size);
}

// change Text size on slider submit
sizeInput.addEventListener(eventTrigger, throttle(changeTextSize, 100));
// Non Throttled TextSize
//sizeInput.addEventListener(eventTrigger, changeTextSize2);

// // add / replace size on form submit
// sizeInput.addEventListener(eventTrigger, (event) => {
//   const size = sizeInput.value;
//   addValue('fontsize', size);
// });

// CHANGE TEXT SPACING //
const textSpaceInput = document.getElementById('rangeSpace');

function changeTextSpacing () {
  const textSpacing = textSpaceInput.value;
  console.count("TextSpacingThrottled input")
  addValue('textspacing', textSpacing);
}

// Non Throttled TextSize Function
function changeTextSpacing2 () {
  const textSpacing = textSpaceInput.value;
  console.count("TextSpacingNonThrottled input")
  //addValue('textspacing', textSpacing);
}

// change Text Spacing on slider submit
textSpaceInput.addEventListener(eventTrigger, throttle(changeTextSpacing, 100));

// Non Throttled TextSpacing
//textSpaceInput.addEventListener(eventTrigger, changeTextSpacing2);


/* OLD FUNCTION */
// textSpaceInput.addEventListener(eventTrigger, (event) => {
//   const textSpacing = textSpaceInput.value;
//   addValue('textspacing', textSpacing)
// });

// CHANGE LETTER SPACING
const textLetterInput = document.getElementById('rangeLetter');

function changeLetterSpacing () {
  const textLetter = textLetterInput.value;
  console.count("TextLetterThrottled input")
  addValue('letterspacing', textLetter);
}

// Non Throttled TextSize Function
function changeLetterSpacing2 () {
  const textLetter = textLetterInput.value;
  console.count("TextSizeNonThrottled input")
  //addValue('letterspacing', textLetter);
}

// change Text size on slider submit
textLetterInput.addEventListener(eventTrigger, throttle(changeLetterSpacing, 100));

// Non Throttled TextSpacing
//textLetterInput.addEventListener(eventTrigger, changeLetterSpacing2);

/* OLD FUNCTION */
//
// textLetterInput.addEventListener(eventTrigger, (event) => {
//   const textLetter = textLetterInput.value;
//   addValue('letterspacing', textLetter)

// });

// OTHER STUFF

// FORM FOR ADDIND / REPLACING VALUES
const valuesForm = document.getElementById('value-form');
const valueIdInput = document.getElementById('value-id-input');
const valueInput = document.getElementById('value-input');

/* 
// add / replace value id and value on form submit
valuesForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const valueId = valueIdInput.value;
  const value = valueInput.value;
  valueIdInput.value = '';
  valueInput.value = '';
  addValue(valueId, value);
});

*/

// COLOR PICKER ADDING/REPLACING
const colorValueIdInput = document.getElementById('colorBg');
const colorId = "colorbg";

colorValueIdInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const valueId = colorId;
    const value = valueInput.value;
    addValue(valueId, value);
    console.log(colorId);

});

var currentUsers = 1;
const userCounter = document.getElementById('userCounter');
console.log(currentUsers);
userCounter.innerHTML = "USERS: " +currentUsers;


/*
/////////////////
// TRACKING USERS IDEA NOT WORKING 
window.onload = function() {
  console.log("User entered the website");
  currentUsers++;
  console.log(currentUsers);
  userCounter.innerHTML = "USERS: " +currentUsers;

  // Additional tracking logic or actions can be performed here
};

window.onbeforeunload = function() {
  console.log("User is leaving the website");
  currentUsers--;
  // Additional tracking logic or actions can be performed here
  return null; // This is required to prevent a browser-specific prompt
};
*/

// TRACKING USERS USING FIREBASE (based on Code by Katharina Nejdl)

//ENABLE ANONYMUS USER IN THE FIREBASE PRJ CONSOLE!!!


