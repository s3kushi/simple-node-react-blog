# simple-node-react-blog

An exercise in async microservices architecture, with an event bus service in charge of handling events.
It contains multiple microservices and a react client app. 
The microservices store post and comment data input from users, as well as queries and moderation requests, emitting
events every time changes occur.