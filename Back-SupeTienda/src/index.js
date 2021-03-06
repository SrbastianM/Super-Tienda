const express = require('express');

const app = express();
require('./routes/users')(app);
require('./routes/products')(app);

const port = 3001;

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});