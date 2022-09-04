import React,{ChangeEvent, Component} from "react";
import _ from "lodash";

import {SingleLineInput} from "@blockware/ui-web-components";

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

    if (!name.startsWith('/') || !/^\/[a-z]([a-z0-9_-]*[a-z0-9_]\/?)*$/i.test(name)) {
        throw new Error('Invalid path');
    }
}

interface WebSiteSpec {
    path:string
}

class WebSiteEditorComponent extends Component<ResourceConfigProps<ResourceMetadata, WebSiteSpec>> {


    private handleMetaDataChanged(name:string, value:string) {
        const metadata = _.clone(this.props.metadata);
        metadata[name] = value;
        this.props.onDataChanged(metadata, this.props.spec);
    }

    render() {

        return (
            <>
                <SingleLineInput
                    name={"name"}
                    value={this.props.metadata.name}
                    label={"Name"}
                    validation={['required', validateSiteName]}
                    help={"Name your site"}
                    onChange={(name: string, input: string) => this.handleMetaDataChanged(name, input)}
                />

                <SingleLineInput
                    name={"path"}
                    value={this.props.metadata.path}
                    label={"Path"}
                    validation={['required', validatePath]}
                    help={"Give your site a path"}
                    onChange={(name: string, input: string) => this.handleMetaDataChanged(name, input)}
                />

            </>
        )

    }
}

export default WebSiteEditorComponent;