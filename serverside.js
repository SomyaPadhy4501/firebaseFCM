const express = require('express');
const admin = require('firebase-admin'); 

const app = express();

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

admin.initializeApp({

});

const messaging = admin.messaging();


app.post('/book-updated', async (req, res) => {
  const loanId = req.body.bookId;
  const userId = req.body.userId;
  const updateType = req.body.updateType;

  const tokens = await getUserNotificationTokens(userId);

  // Prepare notification payload
  const payload = {
    notification: {
      title: 'Loan Update',
      body: `Your book ${bookId} has been ${updateType}.`,
    },
    data: {
      bookId,
    },
  };

  // Send notification to subscribed users
  try {
    const response = await messaging.sendToDevice(tokens, payload);
    console.log('Notifications sent successfully:', response);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).send('Failed to send notifications');
  }
});

