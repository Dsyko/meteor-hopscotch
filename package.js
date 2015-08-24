Package.describe({
	summary:  "Hopscotch (v0.25) - tour plugin for Meteor",
	version: '1.1.5',
	name: "mikkelking:meteor-hopscotch",
	git: 'https://github.com/mikkelking/meteor-hopscotch'
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.1.0.3");
    api.addFiles('lib/hopscotch-0.2.5.min.js', "client");
    api.addFiles('lib/hopscotch-0.2.5.min.css', "client");
	api.addFiles('img/sprite-green.png', "client");
	api.addFiles('img/sprite-orange.png', "client");
    api.addFiles('lib/main.js', "client");
	api.export('hopscotch', 'client');
});

Package.onTest(function (api) {
	api.use(['mikkelking:meteor-hopscotch', 'tinytest'], ['client']);
	api.add_files('test.js', ['client']);
});
