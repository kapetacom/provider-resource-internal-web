import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    ResourceConfig,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@blockware/ui-web-types';

const config: ResourceConfig<ResourceMetadata> = {
    kind: 'blockware/resource-type-web-page',
    title: 'Web Page',
    consumableKind: 'blockware/resource-type-web-fragment',
    role: ResourceRole.PROVIDES,
    type: ResourceType.SERVICE,
    componentType: WebSiteEditorComponent,
};

export default config;