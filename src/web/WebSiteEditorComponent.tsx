import React from "react";

import {FormField} from "@kapeta/ui-web-components";

function validateSiteName(fieldName:string, name:string) {
    if (!/^[a-z]([a-z0-9_]*[a-z0-9_])?$/i.test(name)) {
        throw new Error('Invalid site name');
    }
}

function validatePath(fieldName:string, name:string) {
    if (name === '/') {
        return;
    }

    if (!name.startsWith('/') || !/^\/[a-z]([a-z0-9_-]*[a-z0-9_]\/?)*$/i.test(name)) {
        throw new Error('Invalid path');
    }
}


const WebSiteEditorComponent = () => {


    return (
        <>
            <FormField
                name={"metadata.name"}
                label={"Name"}
                validation={['required', validateSiteName]}
                help={"Name your site"}
            />

            <FormField
                name={"spec.path"}
                label={"Path"}
                validation={['required', validatePath]}
                help={"Give your site a path"}
            />

        </>
    )
}

export default WebSiteEditorComponent;