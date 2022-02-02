1. Create a developer account on Twitter
2. Add http://localhost:4000/auth/redirect to the Redirect URL section in Twitter
3. rename .env.copy to .env and adjust twitter credentials and cookie_key (any string)
4. create a mongo atlas cluster and rename globals.copy.js to globals.js
5. adjust mongo  db user, db password, db clustername, db collection name in the renamed .env file

6. Start frontend (http://localhost:3000)

	    cd client
	    npm install
	    npm start

	 front end will render at http://localhost:3000


7. Start backend (http://localhost:4000)

	Make sure you adjusted the credentials and paths ind the .env and server/config/globals.js file 
	    cd server/
	    npm install
	    nodemon server.js

	server will run on port 4000