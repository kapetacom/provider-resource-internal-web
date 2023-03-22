import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    ResourceConfig, ResourceKind,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@kapeta/ui-web-types';

const packageJson = require('../../package.json');

const config: ResourceConfig<ResourceMetadata> = {
    kind: 'kapeta/resource-type-web-fragment',
    version: packageJson.version,
    title: 'Web Fragment',
    role: ResourceRole.CONSUMES,
    type: ResourceType.SERVICE,
    componentType: WebSiteEditorComponent,
    converters: [
        {
            fromKind: 'kapeta/resource-type-web-page',
            createFrom: (data: ResourceKind) => {
                return {...data}
            }
        }
    ],
};

export default config;
