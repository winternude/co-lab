// DB
// import firebase from cdn
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  // activated on every change
  onSnapshot,
  // vers. 9.22.2 – added for user counter / auth
  serverTimestamp,
} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

// config
const firebaseConfig = {

//  * ALTERNATIVE DB API KEY (USE IF DB BREAKS)
  apiKey: "AIzaSyCUGdgKzVb6_cJyav4V5U8EyO6iJNmZm0s",
  authDomain: "co-lab-16feb.firebaseapp.com",
  projectId: "co-lab-16feb",
  storageBucket: "co-lab-16feb.appspot.com",
  messagingSenderId: "827072280835",
  appId: "1:827072280835:web:210d9802f03c7286181136",
  measurementId: "G-SQRV99ZX8S"
  


  // // * ORIGINAL DB API KEY
  //   apiKey: "AIzaSyD5fO7vcmtPVbsruyOrF-YDmhNDKGg0LlI",
  //   authDomain: "co-lab-prj.firebaseapp.com",
  //   projectId: "co-lab-prj",
  //   storageBucket: "co-lab-prj.appspot.com",
  //   messagingSenderId: "983517005444",
  //   appId: "1:983517005444:web:783087360a20eeb4bba4d1",
  //   measurementId: "G-TBHR1NL4MF"
  
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize services
const db = getFirestore(app);

// COLLECTION REF
const colRef = collection(db, 'data');


// * UPDATES ON SNAPSHOT (EVERY TIME INPUT CHANGES -> UPDATES DB)

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
// GET TEXT COLOR UPDATES
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

// * VARIABLE FOR DATA VALUE (INPUT)
const eventTrigger = 'input';/* 'input';*/

// * THROTTLE FUNCTION USED BY THE PARAMETER INPUTS
// https://jsfiddle.net/jonathansampson/m7G64/

// ^ original function used... (check JS Fiddle)
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

// * PARAMETERS CHANGED BY USER A

// ^ CHANGE BACKGROUND VALUE
const backgroundColorInput = document.getElementById('colorBg');

function changeBackgroundColor () {
  const color = backgroundColorInput.value;
  // console.count("throttled input")
  addValue('colorbg', color);
}

// add / replace color on form submit
backgroundColorInput.addEventListener(eventTrigger, throttle(changeBackgroundColor, 100));

// ^ CHANGE LINE HEIGHT
const lineHeightInput = document.getElementById('rangeHeight');

// Function that changes the text-size (which is throttled later on)
function changeLineHeight () {
  const lineHeight = lineHeightInput.value;
  //console.count("LineHeightThrottled input")
  addValue('lineheight', lineHeight);
}

lineHeightInput.addEventListener(eventTrigger, throttle(changeLineHeight, 100));

// ^ CHANGE TEXT SPACING
const textSpaceInput = document.getElementById('rangeSpace');

// Function that changes the text-spacing (which is throttled later on)
function changeTextSpacing () {
  const textSpacing = textSpaceInput.value;
  // console.count("TextSpacingThrottled input")
  addValue('textspacing', textSpacing);
}

// change Text Spacing on slider submit
textSpaceInput.addEventListener(eventTrigger, throttle(changeTextSpacing, 100));

// * PARAMETERS CHANGED BY USER B 

// ^ CHANGE TEXT COLOR
const textColorInput = document.getElementById('colorText');

function changeTextColor () {
  const textColor = textColorInput.value;
  // console.count("input")
  addValue('colortext', textColor);
}

// add / replace color on form submit
textColorInput.addEventListener(eventTrigger, throttle(changeTextColor, 100));

// ^ CHANGE FONT SIZE INPUT
// FORM FOR ADDIND / REPLACING RANGE SIZE
const sizeInput = document.getElementById('rangeSize');

// Function that changes the text-size (which is throttled later on)
function changeTextSize () {
  const size = sizeInput.value;
  // console.count("TextSizeThrottled input")
  addValue('fontsize', size);
}

// change Text size on slider submit
sizeInput.addEventListener(eventTrigger, throttle(changeTextSize, 100));

// ^ CHANGE LETTER SPACING
const textLetterInput = document.getElementById('rangeLetter');

// Function that changes the letter-spacing (which is throttled later on)
function changeLetterSpacing () {
  const textLetter = textLetterInput.value;
  //console.count("TextLetterThrottled input")
  addValue('letterspacing', textLetter);
}

// change Text size on slider submit
textLetterInput.addEventListener(eventTrigger, throttle(changeLetterSpacing, 100));



// // FORM FOR ADDIND / REPLACING VALUES
// const valuesForm = document.getElementById('value-form');
// const valueIdInput = document.getElementById('value-id-input');
// const valueInput = document.getElementById('value-input');

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
// ^ Old Variant of the Value Submit without Throttling Function
// // COLOR PICKER ADDING/REPLACING
// const colorValueIdInput = document.getElementById('colorBg');
// const colorId = "colorbg";

// colorValueIdInput.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const valueId = colorId;
//     const value = valueInput.value;
//     addValue(valueId, value);
//     console.log(colorId);

// });

var currentUsers = 1;
const userCounter = document.getElementById('userCounter');
console.log(currentUsers);
userCounter.innerHTML = "USERS: " +currentUsers;

// TRACKING USERS USING FIREBASE (based on Code by Katharina Nejdl)

//ENABLE ANONYMUS USER IN THE FIREBASE PRJ CONSOLE!!!




// TODO USER AUTHENTIFICATION (SOME PARTS NEEDS TO BE REWRITTEN IN VANILLA JS FROM REACT)

// // USER COUNTER

// // FIX ME: 
// // > CHANGE NAME OF "EDITORIAL" COLLECTION

// //FUNCTIONS TO TRACK USERS

// // LOADED BY FIREBASE:
// // getFirestore,
// // collection,
// // getDocs,
// // doc,
// // setDoc,
// // onSnapshot,

// // CREATE ANONYMOUS USER
// import { 
//   getAuth, 
//   signInAnonymously, 
//   onAuthStateChanged,
// // } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js'
// } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js'

// // FUNCTIONS FROM API.JS
// // https://github.com/nejdl/together-online_reactjs-frontend/blob/main/src/api/api.js#L49
// // sign in anonymously
// const auth = getAuth();
// const createAnonymousUser = () => {
//   signInAnonymously(auth)
//     .then(() => {
//       console.log('Signed in as anonymous user.');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// // add document
// const createUserDocument = (userId) => {
//   setDoc(doc(db, 'editorial', userId), {
//     timestamp: serverTimestamp(),
//   })
//     .then(() => {
//       // console.log('Created user document.');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// // update document
// const updateUserDocument = async (userId) => {
//   let docRef = doc(db, 'editorial', userId);

//   try {
//     await updateDoc(docRef, {
//       timestamp: Date.now(),
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// // FIX ME!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // change editorialCollection for later, value = firestore editorial collection

// const editorialCollection = collection(db, 'editorial');

// // list online users
// const listOnlineUsers = async (expirationTime) => {
//   try {
//     // get all user documents
//     const documents = await getDocs(editorialCollection);

//     // list all user documents where timestamp is not older than exired timestamp
//     let onlineUsers = [];
//     let users = [];
//     documents.docs.forEach((doc) => {
//       const docData = doc.data();
//       const documentTimestamp = docData.timestamp;
//       // FIX ME (instead of big time buffer use snapshot changes)
//       const timeBuffer = 1700;
//       const expiredTimestamp = Date.now() - (expirationTime + timeBuffer);
//       if (documentTimestamp >= expiredTimestamp) {
//         onlineUsers.push({ ...docData, id: doc.id });
//       }
//     });
//     const numberOfOnlineUsers = onlineUsers.length;
//     return numberOfOnlineUsers;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // FUNCTIONS FROM EDITORIAL.JS
// // https://github.com/nejdl/together-online_reactjs-frontend/blob/main/src/components/Experiments/Editorial/Editorial.js#L3

// // create anonymous user and set user id
// // useEffect(() => {
//   createAnonymousUser();

//   let userId = null;

//   const setUserId = (uid) => {
//     console.log("do something with the" + uid);
//     // in array speichern?
//   }

//   // if anonymous sign is successful
//   const unsubscribeAuthStateChange = onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       // set user id state
//       // and create user document in db
//       createUserDocument(uid);
      
//       // setUserId -> const userArray = []; rebuilding from react...
//       // setUserId(uid); // FIX ME
//       userId = uid;
//       updateUserDocumentsAndCountOnlineUsers() // FIX ME
      
//     } else {
//       console.error('Error: No user found.');
//     }
//   });

//   // // cleanup subscription // FIX ME [REACT > VANILLA JS]
//   // return () => {
//   //   unsubscribeAuthStateChange();
//   // }; 
// // }, []);



// // UPDATE USER DOCUMENT & COUNT ONLINE USERS
// const updateTimeInMs = 1000;

// // FIX ME HERE !!!!!!
// // useEffect(() => { // FIX ME [REACT > VANILLA JS]
// const updateUserDocumentsAndCountOnlineUsers = () => {
//   // update user document in db frequently
//   // to prove that user is still online
//   // and count current online users
//   let updateInterval;
//   // only after anonymous user with user id was created
//   if (userId) {
//     updateInterval = setInterval(() => {
//       // update user document with this id to update timestamp
//       updateUserDocument(userId);
//       coutOnlineUsers();
//     }, updateTimeInMs);
//   }

//   // cleanup interval
//   return () => clearInterval(updateInterval);
// }

// updateUserDocumentsAndCountOnlineUsers() // FIX ME [REACT > VANILLA JS]
// // > relaod this function everytime user id changes
// // }, [userId]); // FIX ME [REACT > VANILLA JS]

// // // cleanup interval // FIX ME [REACT > VANILLA JS]
// // return () => clearInterval(updateInterval);

// const setCurrentlyOnline = (numberOfOnlineUsers) => {
//   console.log("do something with" + numberOfOnlineUsers)
//   // FIX ME [REACT > VANILLA JS]
//   // get output element 
//   // outputElement.innerHTML = numberOfOnlineUsers;
//   //   console.log(currentUsers);
//   // userCounter.innerHTML = "USERS: " +currentUsers;
// }

// // count current users online
// const coutOnlineUsers = async () => {
//   const numberOfOnlineUsers = await listOnlineUsers(updateTimeInMs);

//   // FIX ME: online user number is sometimes returned 0 from db
//   // prevent showing 0 online users
//   if (numberOfOnlineUsers > 0) {
//     setCurrentlyOnline(numberOfOnlineUsers);  // FIX ME [REACT > VANILLA JS]
//   } else {
//     setCurrentlyOnline(1);  // FIX ME [REACT > VANILLA JS]
//   }
// };