import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    ResourceConfig,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@blockware/ui-web-types';

const definition = require('../../blockware.yml');

const config: ResourceConfig<ResourceMetadata> = {
    kind: definition.metadata.id,
    name: definition.metadata.name,
    role: ResourceRole.PROVIDES,
    type: ResourceType.SERVICE,
    componentType: WebSiteEditorComponent,
};

export default config;