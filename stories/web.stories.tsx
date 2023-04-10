import React from 'react';

import '@kapeta/ui-web-components/styles/index.less';
import WebSiteEditorComponent from "../src/web/WebSiteEditorComponent";
import {Resource} from "@kapeta/schemas";
import {FormContainer} from "@kapeta/ui-web-components";

const RESOURCE_KIND = 'kapeta/resource-type-web-page';

const initialResource: Resource = {
    kind: RESOURCE_KIND,
    metadata: {
        name: 'MyWebsite'
    },
    spec: {
        port: {
            type: 'web'
        },
        path: '/my-site'
    }
};

export default {
    title: 'Web'
};

export const Editor = () => {

    return (
        <FormContainer initialValue={initialResource}
                       onChange={(data) => {
                           console.log('Data changed', data);
                       }}>
            <WebSiteEditorComponent/>
        </FormContainer>
    )
};
