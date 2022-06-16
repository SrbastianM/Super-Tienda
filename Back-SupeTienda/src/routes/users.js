const data = require('../fake_db/users.json');

module.exports = function (app) {
	app.get('/users', (req, res) => {
		res.send(data.users);
	});

	app.get('/users/:id', (req, res) => {
		const users = data.users;
		for (let user of users) {
			if (user.id == req.params.id) {
				res.send(user);
				return;
			}
		}

		res.status(404).send("Not Found");
	});

	app.post('/users', (req, res) => {
		const validUser = checkUserField(req.body);
		if (!validUser) {
			res.status(400).send("Invalid User");
			return;
		}

		req.body.id = data.users.length;
		data.users.push(req.body);
	});
}

function checkUserField(data) {
	if (!data.name || !data.password || !data.email) {
		return false;
	}

	return true;
}