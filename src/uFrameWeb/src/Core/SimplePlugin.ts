module uFrame.Plugins {

    "use strict";
    import CorePlugin = uFrame.Core.Plugins.CorePlugin;
    
    export class SimplePlugin extends CorePlugin {
        Initialize() {
            console.log("Simple plugin Initialized");
        }
    }
}