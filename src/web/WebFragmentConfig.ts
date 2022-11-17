import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    ResourceConfig,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@blockware/ui-web-types';

const config: ResourceConfig<ResourceMetadata> = {
    kind: 'blockware/resource-type-web-fragment',
    name: 'Web Fragment',
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