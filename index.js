const silkedit = require('silkedit')

module.exports = {
	activate: function() {
	},

	commands: {
		"hello": () => {
			silkedit.alert(silkedit.tr("hello_example:hello", "Hello!"));
		}
	}
}
