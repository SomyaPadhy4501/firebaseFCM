import { useEffect } from 'react'
import React from 'react'
import { getToken } from 'firebase/messaging'
import { messaging } from './firebase'

const App = () => {

  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if(permission === "granted"){
      //Generate Token
      const token = await getToken(messaging , {vapidKey:"BJkvsBSKmmPpUuwbddP0V9_KIVq6rhoFJWRFCVWGYGeLee9kzEPDmBUIJNrgAeahNzIZ6-Ye-ERjzZ3wbH-reZg"})
      console.log('Token generated' , token);
    } else if(permission === "denied"){
      alert("You denied for the notification");
    }
  }  
useEffect(() => {
  //req user for notification
  requestPermission();
}, [])
  return (
    <div>App</div>
  )
}

export default App