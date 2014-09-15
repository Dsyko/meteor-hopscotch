Package.describe({
	summary:  "Hopscotch is a framework that makes it easy for developers to add product tours to their pages.",
	version: '1.1.2',
	name: "dsyko:hopscotch",
	git: 'https://github.com/Dsyko/meteor-hopscotch'
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@0.9.0");
    api.addFiles('lib/hopscotch-0.1.2.min.js', "client");
    api.addFiles('lib/hopscotch-0.1.2.min.css', "client");
    api.addFiles('img/sprite-green-0.3.png', "client");
    api.addFiles('img/sprite-orange-0.3.png', "client");
});