module.exports = {
	activate: function() {
	},

	commands: {
		"hello": () => {
			silk.alert(silk.t("hello_example:hello", "Hello!"));
		}
	}
}
