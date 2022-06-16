const data = require('../fake_db/products.json');

module.exports = function (app) {
	app.get('/products', (req, res) => {
		res.send(data.products);
	});

	app.get('/products/:id', (req, res) => {
		const products = data.products;
		for (let user of products) {
			if (user.id == req.params.id) {
				res.send(user);
				return;
			}
		}

		res.status(404).send("Not Found");
	});

	app.post('/products', (req, res) => {
		const validUser = checkUserField(req.body);
		if (!validUser) {
			res.status(400).send("Invalid User");
			return;
		}

		req.body.id = data.products.length;
		data.products.push(req.body);
	});
}

function checkUserField(data) {
	if (!data.name || !data.image || !data.price || !data.rating) {
		return false;
	}

	return true;
}