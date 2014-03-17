Package.describe({
    summary: "Hopscotch is a framework that makes it easy for developers to add product tours to their pages."
});

Package.on_use(function (api) {
    api.add_files('lib/hopscotch-0.1.2.min.js', "client");
    api.add_files('lib/hopscotch-0.1.2.min.css', "client");
    api.add_files('img/sprite-green-0.3.png', "client");
    api.add_files('img/sprite-orange-0.3.png', "client");
});