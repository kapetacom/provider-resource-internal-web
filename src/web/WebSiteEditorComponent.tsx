import React,{ChangeEvent, Component} from "react";
import _ from "lodash";

import {FormRow} from "@blockware/ui-web-components";

import {
    ResourceMetadata,
    ResourceConfigProps,
} from "@blockware/ui-web-types";

function validateSiteName(fieldName:string, name:string) {
    if (!/^[a-z]([a-z0-9_]*[a-z0-9_])?$/i.test(name)) {
        throw new Error('Invalid site name');
    }
}

function validatePath(fieldName:string, name:string) {
    if (name === '/') {
        return;
    }

    if (!name.startsWith('/') || !/^\/[a-z]([a-z0-9_-]*[a-z0-9_]\/?)*$/i.test(name)) {
        throw new Error('Invalid path');
    }
}

interface WebSiteSpec {
    path:string
}

class WebSiteEditorComponent extends Component<ResourceConfigProps<ResourceMetadata, WebSiteSpec>> {


    private handleMetaDataChanged(evt:ChangeEvent<HTMLInputElement>) {
        const metadata = _.clone(this.props.metadata);
        metadata[evt.target.name] = evt.target.value;
        this.props.onDataChanged(metadata, this.props.spec);
    }

    private handleSpecChanged(evt:ChangeEvent<HTMLInputElement>) {
        const spec = _.clone(this.props.spec);
        spec[evt.target.name] = evt.target.value;
        this.props.onDataChanged(this.props.metadata, spec);
    }

    render() {

        return (
            <>
                <FormRow label="Name"
                         help="Name your site"
                         validation={['required', validateSiteName]}>

                    <input type="text" placeholder="E.g. MySite or Main"
                           name="name"
                           autoComplete={"off"}
                           value={this.props.metadata.name}
                           onChange={(evt) => {this.handleMetaDataChanged(evt)}} />

                </FormRow>
                <FormRow label="Path"
                         help="Give your site a path"
                         validation={['required', validatePath]}>

                    <input type="text" placeholder="E.g. / or /my-site"
                           name="path"
                           autoComplete={"off"}
                           value={this.props.spec.path}
                           onChange={(evt) => {this.handleSpecChanged(evt)}} />

                </FormRow>
            </>
        )

    }
}

export default WebSiteEditorComponent;