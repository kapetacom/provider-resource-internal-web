import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    ResourceConfig,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@blockware/ui-web-types';

const config: ResourceConfig<ResourceMetadata> = {
    kind: 'web.blockware.com/v1/Fragment',
    name: 'Web Fragment',
    role: ResourceRole.CONSUMES,
    type: ResourceType.SERVICE,
    componentType: WebSiteEditorComponent,
    converters: [
        {
            fromKind: 'web.blockware.com/v1/Page',
            createFrom: (data: ResourceKind) => {
                return {...data, kind: 'web.blockware.com/v1/Fragment'}
            }
        }
    ],
};

export default config;