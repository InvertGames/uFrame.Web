'use strict';
((() => {
    function OnLoad() {
        // put whatever you need to load on DOM ready in here
        var app = new uFrame.Web.Client.Core.InvertApplication();
        app.PluginsNamespace = uFrame.Plugins;
        app.Load();
    }
    document.addEventListener('DOMContentLoaded', OnLoad, false);
}) ());