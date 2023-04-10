import WebSiteEditorComponent from './WebSiteEditorComponent';

import {
    IResourceTypeProvider,
    ResourceRole,
    ResourceProviderType
} from '@kapeta/ui-web-types';
import {Metadata, Resource} from "@kapeta/schemas";

const packageJson = require('../../package.json');

const config: IResourceTypeProvider<Metadata> = {
    kind: 'kapeta/resource-type-web-fragment',
    version: packageJson.version,
    title: 'Web Fragment',
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.INTERNAL,
    componentType: WebSiteEditorComponent,
    converters: [
        {
            fromKind: 'kapeta/resource-type-web-page',
            createFrom: (data: Resource) => {
                return {...data}
            }
        }
    ],
    definition: {
        kind: 'core/resource-type-internal',
        metadata: {
            name: 'kapeta/resource-type-web-page',
            title: 'Web Fragment',
            description: 'Consume web page fragments to enable a microfrontend architecture'
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

export default config;
