import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    ResourceConfig,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@blockware/ui-web-types';

const config: ResourceConfig<ResourceMetadata> = {
    kind: 'web.blockware.com/v1/Page',
    name: 'Web Page',
    consumableKind: 'web.blockware.com/v1/Fragment',
    role: ResourceRole.PROVIDES,
    type: ResourceType.SERVICE,
    componentType: WebSiteEditorComponent,
};

export default config;