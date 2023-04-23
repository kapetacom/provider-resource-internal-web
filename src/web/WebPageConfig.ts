import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    IResourceTypeProvider,
    ResourceRole,
    ResourceProviderType
} from '@kapeta/ui-web-types';
import {Metadata} from "@kapeta/schemas";

const packageJson = require('../../package.json');


const resourceTypeProvider: IResourceTypeProvider<Metadata> = {
    kind: 'kapeta/resource-type-web-page',
    version: packageJson.version,
    title: 'Web Page',
    consumableKind: 'kapeta/resource-type-web-fragment',
    role: ResourceRole.PROVIDES,
    type: ResourceProviderType.INTERNAL,
    editorComponent: WebSiteEditorComponent,
    definition: {
        kind: 'core/resource-type-internal',
        metadata: {
            name: 'kapeta/resource-type-web-page',
            title: 'Web Page',
            description: 'Create web-based UI\'s for your plan.'
        },
        spec: {
            ports: [
                {
                    name: 'http',
                    type: 'web'
                }
            ]
        }
    }
};

export default resourceTypeProvider;
