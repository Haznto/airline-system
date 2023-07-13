# Airline-system

## V.1 [events branch]

## Description (v.1)

This App is a system of Airline event logger, it keeps informing you with each flight updates. (using events built in node.js module)

![Uml of the website](./assets/Flight%20system%20UML%20(1).jpg)

## To run the application (v.1)

- Clone the repository
- Navigate to the folder of the code and each subfolder and run `npm i`
- run the code by typing `node system.js` in the terminal when in system directory

## V.2 [socket.io branch]

## Description (v.2)

This App is a system of Airline event logger, it keeps informing you with each flight updates.(using socket.io)

![Uml of the website](./assets/socket.io.jpg)

## To run the application (v.2)

- Clone the repository
- Navigate to the folder of the code and each subfolder and run `npm i`

then in order:

1. run the code by typing `node system.js` in the terminal when in system directory
2. run the code by typing `node pilot.js` in the terminal when in pilot directory
3. run the code by typing `node manager.js` in the terminal when in manager directory

## V.3 [main branch & messageQueue branch]

## Description (v.3)

This App is a system of Airline event logger, it keeps informing you with each flight updates.(using socket.io) and implementing messege queue to save data once a participant of the event cycle disconnect.

![Uml of the website](./assets/messageQueue%20(1).jpg)

## To run the application (v.3)

- Clone the repository
- Navigate to the folder of the code and each subfolder and run `npm i`

then in order:

1. run the code by typing `node system.js` in the terminal when in system directory
2. run the code by typing `node manager.js` in the terminal when in manager directory.
3. wait for 20 second to give the manager the time to send two flights that the pilot will miss.
4. run the code by typing `node pilot.js` in the terminal when in pilot directory
