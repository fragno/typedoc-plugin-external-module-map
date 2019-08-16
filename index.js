var plugin = require("./plugin");
module.exports = function(PluginHost) {
  var app = PluginHost.owner;

  if (!app.options.declaration.em) {
    app.options.addDeclaration({ name: 'external-modulemap', short: 'em' });
    app.converter.addComponent('external-module-map', plugin.ExternalModuleMapPlugin);
  }
};

