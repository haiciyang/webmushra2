/*************************************************************************
         (C) Copyright AudioLabs 2017

This source code is protected by copyright law and international treaties. This source code is made available to You subject to the terms and conditions of the Software License for the webMUSHRA.js Software. Said terms and conditions have been made available to You prior to Your download of this source code. By downloading this source code You agree to be bound by the above mentionend terms and conditions, which can also be found here: https://www.audiolabs-erlangen.de/resources/webMUSHRA. Any unauthorised use of this source code may result in severe civil and criminal penalties, and will be prosecuted to the maximum extent possible under law.

**************************************************************************/

function DataSender(config) {
  this.target = config.remoteService;
}

DataSender.prototype.send = function(_session) {

  // Set the configuration for your app
  // TODO: Replace with your project's config object
  // Your web app's Firebase configuration

  var firebaseConfig = {
  apiKey: "AIzaSyC46RtzA8XthKzzdAQ_vzjlnVx0LoqS16c",
  authDomain: "genc-68513.firebaseapp.com",
  projectId: "genc-68513",
  databaseURL: "https://genc-68513-default-rtdb.firebaseio.com/",
  storageBucket: "genc-68513.appspot.com",
  messagingSenderId: "971237180232",
  appId: "1:971237180232:web:8e39b26e4da5a29f13697d",
  measurementId: "G-LC5Z88B029"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var sessionJSON = JSON.stringify(_session);

  var start = Date.now();
  var s = start.toString();

  // var dlAnchorElem = document.getElementById('downloadAnchorElem');
  // dlAnchorElem.setAttribute("href", sessionJSON);
  // dlAnchorElem.setAttribute("download", "mushra_results.json");
  // dlAnchorElem.click();
  
  firebase.database().ref().child(s).set(sessionJSON,
        function(error) {
        if (error) {
          console.log(httpReq.responseText);
          return true;
        }
        return false
  });
  // var httpReq = new XMLHttpRequest();
  // var params = "sessionJSON=" + sessionJSON;
  // try {
  //   httpReq.send()
  //   return !( xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304) );
  //   // httpReq.open("POST", config.remoteService, false);  // synchron
  //   // httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //   // httpReq.send(params);
  // }
  // catch (e) {
  //   console.log(httpReq.responseText);
  //   return true;
  // }
  // if((httpReq.responseText != "" || httpReq.status != 200) && !httpReq.responseText.includes('Warning')){
  //   console.log(httpReq.responseText);
  //   return true;
  // }else{
  //   console.log(httpReq.responseText)
  //   return false;
  // }
};

