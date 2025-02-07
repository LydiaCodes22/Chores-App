# Bish Bash Dosh
This app is designed to help a family get their chores done and keep the peace while they are at it. A parent is able to create an account and invite co parents and children to join. Chores can be added and assigned a monetary value. They will appear for all children when they are in the 'Available' state and the first to take the chore and mark it 'done' will be submitting a request to the parent to approve the chore completion so the money can be added to their account.\
This is the repository for the front end of the application, the back-end can be found here: https://github.com/LydiaCodes22/chores-app-back-end.

## Screenshots
The welcome page \
![screenshot of welcome page](./src/images/screenshots/welcomePage.png "The welcome page") \
The sign up form \
![screenshot of the sign up form](./src/images/screenshots/SignUpForm.png "The sign up form") \
The parents' dashboard\
![screenshot of the parent dashboard](./src/images/screenshots/parentDashboard.png "The parents' dashboard") \
The parents' view of their child's profile\
![The parents' view of their child's profile](./src/images/screenshots/parentViewChildProfile.png "The parents' view of their child's profile") \
The edit chore screen\
![screenshot of the edit chore screen](./src/images/screenshots/editChore.png "The edit chore screen") \
The approve chore screen\
![screenshot of the approve chore screen](./src/images/screenshots/approveChores.png "The approve chore screen") \
The childrens' dashboard\
![screenshot of the child dashboard](./src/images/screenshots/childDashboard.png "The childrens' dashboard")\
 The screen to invite a new member\
![screenshot of the invite new member screen](./src/images/screenshots/inviteNewMember.png "The screen to invite a new member") \
The screen showing the children the available chores\
![screenshot of the screen showing the chores available for children to take](./src/images/screenshots/availableChores.png "The screen showing the children the available chores") 


## Future Development
The future of this app would see the API and front-end deployed to make them widely available.\
Security adjustments would be made; hashing of email addresses, hosting of an email address for the app so as not to rely on outlook, creation of a firebase account with "localhost" unselected.\
The functionality of the app would be expanded to allow the children's balances to be updated with every approved chore, and to allow the children to submit requests to cash in some of their balance IRL. 

## Technologies
This project is bootstrapped with React-create-app.\
For full functionality, an emailjs account and a firebase account will also be needed, with the settings saved in .env as below.
To make http requests, axios is used.

## Project setup
To set up this project for yourself, you will need to "git clone git@github.com:LydiaCodes22/Chores-App.git".\
Install the relevant dependencies with npm install.\
Ensure you have an emailjs account and firebase account; set up the .env with the detail below.\
To link it with the back-end, you should following instructions on https://github.com/LydiaCodes22/chores-app-back-end.\
npm start should start up the app and render it in your browser.

## .env
The following keys are contained in the .env and the details will result from creating your own emailjs and firebase account:\

REACT_APP_EMAIL_SERVICE_ID=\
REACT_APP_EMAIL_TEMPLATE_ID=\
REACT_APP_EMAIL_PUBLIC_KEY=\
REACT_APP_FIREBASE_API_KEY=\
REACT_APP_FIREBASE_AUTH_DOMAIN=\
REACT_APP_FIREBASE_PROJECT_ID=\
REACT_APP_FIREBASE_STORAGE_BUCKET=\
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=\
REACT_APP_FIREBASE_APP_ID=
