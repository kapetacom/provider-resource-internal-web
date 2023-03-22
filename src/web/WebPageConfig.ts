import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    ResourceConfig,
    ResourceMetadata,
    ResourceRole,
    ResourceType
} from '@kapeta/ui-web-types';

const packageJson = require('../../package.json');

const config: ResourceConfig<ResourceMetadata> = {
    kind: 'kapeta/resource-type-web-page',
    version: packageJson.version,
    title: 'Web Page',
    consumableKind: 'kapeta/resource-type-web-fragment',
    role: ResourceRole.PROVIDES,
    type: ResourceType.SERVICE,
    componentType: WebSiteEditorComponent,
};

export default config;
