module uFrame.Core.Plugins {
    'use strict';

    export interface ICorePlugin {
        Initialize ();
    }

    export abstract class CorePlugin implements ICorePlugin {
        abstract Initialize();
    }

}

module uFrame.Plugins {
    'use strict';
}