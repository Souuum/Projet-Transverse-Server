# Projet-Transverse-Server
Backend Server for our school project at EFREI

see: https://github.com/Souuum/Projet-Transverse

# Install dependencies
``` 
npm install
npm intsall nodemon -g
```

# Setup Database

```js
/* add in /config/connection.js */
db = "projet-transverse-db";
user = "root";
pw = "root";
host = "localhost";

module.exports = {db, user, pw, host}
```

# Start server
```
nodemon index.js
```
