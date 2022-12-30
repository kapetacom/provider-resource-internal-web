import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    ResourceConfig, ResourceKind,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@blockware/ui-web-types';

const packageJson = require('../../package.json');

const config: ResourceConfig<ResourceMetadata> = {
    kind: 'blockware/resource-type-web-fragment',
    version: packageJson.version,
    title: 'Web Fragment',
    role: ResourceRole.CONSUMES,
    type: ResourceType.SERVICE,
    componentType: WebSiteEditorComponent,
    converters: [
        {
            fromKind: 'blockware/resource-type-web-page',
            createFrom: (data: ResourceKind) => {
                return {...data, kind: 'blockware/resource-type-web-fragment'}
            }
        }
    ],
};

export default config;