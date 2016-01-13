const silkedit = require('silkedit')

module.exports = {
	activate: function() {
	},

	commands: {
		"hello": () => {
			silkedit.API.alert(silkedit.t("hello_example:hello", "Hello!"));
		}
	}
}
