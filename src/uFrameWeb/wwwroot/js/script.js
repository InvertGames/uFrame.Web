'use strict';
((() => {
    function OnLoad() {
        // put whatever you need to load on DOM ready in here
        var app = new uFrame.Web.Client.Core.InvertApplication();
        app.PluginsNamespace = uFrame.Plugins;
        app.Load();
    }
    document.addEventListener('DOMContentLoaded', OnLoad, false);
})());
var uFrame;
(function (uFrame) {
    var Web;
    (function (Web) {
        var Client;
        (function (Client) {
            var IOC;
            (function (IOC) {
                'use strict';
                class Container {
                    Inject() { console.log("Injected, Bitch!"); }
                }
                IOC.Container = Container;
            })(IOC = Client.IOC || (Client.IOC = {}));
        })(Client = Web.Client || (Web.Client = {}));
    })(Web = uFrame.Web || (uFrame.Web = {}));
})(uFrame || (uFrame = {}));
var uFrame;
(function (uFrame) {
    var Core;
    (function (Core) {
        var Plugins;
        (function (Plugins) {
            'use strict';
            class CorePlugin {
            }
            Plugins.CorePlugin = CorePlugin;
        })(Plugins = Core.Plugins || (Core.Plugins = {}));
    })(Core = uFrame.Core || (uFrame.Core = {}));
})(uFrame || (uFrame = {}));
var uFrame;
(function (uFrame) {
    var Plugins;
    (function (Plugins) {
        'use strict';
    })(Plugins = uFrame.Plugins || (uFrame.Plugins = {}));
})(uFrame || (uFrame = {}));
var uFrame;
(function (uFrame) {
    var Web;
    (function (Web) {
        var Client;
        (function (Client) {
            var Core;
            (function (Core) {
                'use strict';
                class InvertApplication {
                    Load() {
                        console.log("GoGoGo");
                        console.log(this.PluginsNamespace);
                        var pluginConstructors = this.GetPluginConstructors(this.PluginsNamespace);
                        console.log(pluginConstructors);
                        for (var c = 0; c < pluginConstructors.length; c++) {
                            var constr = pluginConstructors[c];
                            var plug = new constr();
                            console.log(plug);
                            plug.Initialize();
                        }
                        //Get all the constructors for plugins
                        //Instantiate those
                        //Initialize with passing the container
                    }
                    GetPluginConstructors(obj, list) {
                        list = list || [];
                        for (var key in obj) {
                            if (!obj.hasOwnProperty(key))
                                continue;
                            let value = obj[key];
                            if (!value)
                                continue;
                            if (typeof value === "function") {
                                list.push(value);
                            }
                            else {
                                this.GetPluginConstructors(value, list);
                            }
                        }
                        return list;
                    }
                }
                Core.InvertApplication = InvertApplication;
                class Activator {
                }
                Core.Activator = Activator;
            })(Core = Client.Core || (Client.Core = {}));
        })(Client = Web.Client || (Web.Client = {}));
    })(Web = uFrame.Web || (uFrame.Web = {}));
})(uFrame || (uFrame = {}));
var uFrame;
(function (uFrame) {
    var Plugins;
    (function (Plugins) {
        "use strict";
        var CorePlugin = uFrame.Core.Plugins.CorePlugin;
        class SimplePlugin extends CorePlugin {
            Initialize() {
                console.log("Simple plugin Initialized");
            }
        }
        Plugins.SimplePlugin = SimplePlugin;
    })(Plugins = uFrame.Plugins || (uFrame.Plugins = {}));
})(uFrame || (uFrame = {}));
//# sourceMappingURL=script.js.map