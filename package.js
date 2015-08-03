Package.describe({
	summary:  "Hopscotch is a framework that makes it easy for developers to add product tours to their pages.",
	version: '1.1.4',
	name: "mikkelking:hopscotch",
	git: 'https://github.com/mikkelking/meteor-hopscotch'
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.1.0.2");
    api.addFiles('lib/hopscotch-0.2.5.min.js', "client");
    api.addFiles('lib/hopscotch-0.2.5.min.css', "client");
    api.addFiles('img/sprite-green-0.3.png', "client");
    api.addFiles('img/sprite-orange-0.3.png', "client");
});
