/*jshint esversion: 6 */

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');

app.use(middleware.addHeaders);
//Remember that the app.use() method just applies a function to every request made before passing it on to the next function or eventually sending a response.

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);
app.get('/family', mainCtrl.getFamily);

app.listen(5000, () => console.log('listening on 5000'));
