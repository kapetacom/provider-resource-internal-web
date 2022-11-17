import React,{Component} from "react";
import _ from "lodash";

import {FormInput} from "@blockware/ui-web-components";

import {
    ResourceMetadata,
    ResourceConfigProps,
} from "@blockware/ui-web-types";
import {observer} from "mobx-react";

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

@observer
class WebSiteEditorComponent extends Component<ResourceConfigProps<ResourceMetadata, WebSiteSpec>> {

    private handleMetaDataChanged(name:string, value:string) {
        const metadata = _.clone(this.props.metadata);
        metadata[name] = value;
        this.props.onDataChanged(metadata, this.props.spec);
    }

    private handleSpecDataChanged(name:string, value:string) {
        const spec = _.clone(this.props.spec);
        spec[name] = value;
        this.props.onDataChanged(this.props.metadata, spec);
    }

    render() {

        return (
            <>
                <FormInput
                    name={"name"}
                    value={this.props.metadata.name}
                    label={"Name"}
                    validation={['required', validateSiteName]}
                    help={"Name your site"}
                    onChange={(name: string, input: string) => this.handleMetaDataChanged(name, input)}
                />

                <FormInput
                    name={"path"}
                    value={this.props.spec.path}
                    label={"Path"}
                    validation={['required', validatePath]}
                    help={"Give your site a path"}
                    onChange={(name: string, input: string) => this.handleSpecDataChanged(name, input)}
                />

            </>
        )

    }
}

export default WebSiteEditorComponent;