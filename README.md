# Therapy And Tunes

## Created By

- [Megan Tran](https://github.com/meganjtran)
- [Reshmi Ranjith](https://github.com/ReshmiCode)
- [Saloni Shivdasani](https://github.com/SaloniSS)
- [Vincent Vu](https://github.com/vincent-vu280)

## Links

[Website](https://hackcation-ortbgm.web.app/)  
[Android App](https://play.google.com/store/apps/details?id=com.therapyandtunes.app)  
[Google Assistant Directory](https://assistant.google.com/services/a/uid/00000062cfd3e93b?hl=en)    
[Demo Video](https://www.youtube.com/watch?v=ZnxKsydT2Xc)    
[Devpost Submission](https://devpost.com/software/therapy-tunes)

## Submission

Submitted for Hackcation - MLH Summer League 2020

## Detailed Description

### Inspiration

According to a USC research, sharing your feelings with others reduces stress. But who do you talk to if you want your feelings to be confidential? Have you tried journaling your feelings but it seems ineffective to you without any interaction? Do you just want someone to listen to? In today's day and age, where everyone passes each other with their headphones or airpods in, people have found solace in music, leading to musical therapy being one of the leading forms of therapy. But sometimes when you are in a happy mood or are in the mood for a pick-me-up, scrolling through long lists of songs seems mentally exhaustive. Have you ever wished that you could easily find songs that boost your mood? Are your confidants great listeners but bad singers? We invite you to try Therapy & Tunes, a musical therapy based mental health chatbot.

### What it does

Therapy & Tunes is a mobile application to help you stay calm. Everyday Therapy & Tunes asks you about your day and feelings. They are always here to listen about your feelings and even suggest activities and resources for you. When asked for song recommendations based on mood, it also recommends you some songs. Therapy & Tunes also gives you fun activities to do

### How we built it

- **Frontend:** The app was created using React Native along with Expo and Gifted Chat to implement the chatting ui and connect to dialogflow. The accompanying website was made using React and Kommunicate to get the Google assistant skill.

- **Song Recommendations:** We researched on how songs for different emotions have different levels of track analytics like acousticness, energy, instrumentalness, key, mode, speechiness, tempo, and valence. We then used Spotify’s web API which uses a machine learning model to find songs based on track analytics and similar to a seed track.

- **Backend:** The backend was built using Node.js and Express along with the Spotify API to authorize the app and get the access token. The conversation handler was built using JavaScript and Node.js and incorporated directly onto the frontend code for efficient use of resources.

- **Google Assistant:** We used GCP DialogFlow for the intent creation and conversation flow which is made using Firebase. We also used Google Cloud Functions with Node.js to provide information to the conversation agent.

- **DevOps:** We used GCP Firebase to host the website. The server was deployed using Google App Engine. We used Google Cloud Storage to store the app builds and connect it to the website for users to download. 

### Challenges we ran into

We ran into some challenges implementing the spotify web api, specifically getting the access token. Traditionally, this API requires user authorization. However, we felt that this wasn’t required for the scope of our app. After a lot of hits and trials, we found a package wrapper which we used to help get the access token. However, this was not browser compatible so we had to create a backend to use this library.

### Accomplishments that we're proud of

We are proud of creating a finished product which was our goal for this weekend. We are also proud of creating an app that benefits us as musical fans still getting acquainted to living in solitude during this pandemic.

### What we learned

This was our first time connecting conversational bots to a client code and using an authorization based API. This taught us how real-time socket based app conversations work and how to manage bi-directional flow to data. We also learnt how user authorization flow works in services dealing with sensitive user information. This was our first time using headers in making API calls and we learnt the importance of having the correct headers. We also learnt how cloud configurations work and using pre-configured cloud service in the client side of the app.

### What's next for Therapy & Tunes
In the future, with more time and user research, we would like to have more full fledged conversations. We would also like to send users daily notifications to remind them to self-reflect on their emotions. With the addition of user profiling and database, we would maintain a daily journal of user’s emotions.
