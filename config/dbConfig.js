const mysql = require('mysql2');
module.exports = {
	'connect' : () => {
		return mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database: 'rts_rocknroll',
		});
	}
};
// Virker DB ikke? Genstart XAMPP og skift portnummer!