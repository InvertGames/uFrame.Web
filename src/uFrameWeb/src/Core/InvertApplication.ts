module uFrame.Web.Client.Core {
    import Container = uFrame.Web.Client.IOC.Container;
    import ICorePlugin = uFrame.Core.Plugins.ICorePlugin;
    'use strict';
    export class InvertApplication {

        Container : Container;

        Load() {


            console.log("GoGoGo");
        
            console.log(this.PluginsNamespace);
            var pluginConstructors = this.GetPluginConstructors(this.PluginsNamespace);
            console.log(pluginConstructors);


            for (var c = 0; c < pluginConstructors.length; c++) {
                var constr = pluginConstructors[c];
                var plug = <ICorePlugin>new constr();
                console.log(plug);
                plug.Initialize();


            }

            //Get all the constructors for plugins
            //Instantiate those
            //Initialize with passing the container

        }


        private GetPluginConstructors(obj: any, list? : { () : void } []) {

            list = list || []; 

            for (var key in obj) {
                if (!obj.hasOwnProperty(key)) continue;
                let value = obj[key];
                if(! value ) continue;
                if (typeof value === "function") {
                    list.push(value);
                } else {
                    this.GetPluginConstructors(value, list);
                }
            }
            return list;
        }

        PluginsNamespace : any;
    }

    export class Activator {
        
//        static CreateInstance(type : { () : any }) {
//            
//        }}

    }
}

