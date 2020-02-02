import React, {useState} from 'react';
import {
  ResourceKind,
  BlockWrapper
} from '@blockware/ui-web-types';

import '@blockware/ui-web-components/styles/index.less';
import WebSiteEditorComponent from "../src/web/WebSiteEditorComponent";

const RESOURCE_KIND = 'web.blockware.com/v1/Site';

const block:BlockWrapper<any> = {
  addEntity: entity => {

  },
  getData: () => {
    return {};
  },
  setData: () => {

  },
  getEntityNames: () => ['entity1', 'entity2']
};

const initialResource:ResourceKind<any> = {
  kind: RESOURCE_KIND,
  metadata: {
    name: 'MyWebsite'
  },
  spec: {
    path: '/my-site'
  }
};

export default {
  title: 'PostgreSQL'
};

export const Editor = () => {

  const [metadata, setMetadata] = useState(initialResource.metadata);
  const [spec, setSpec] = useState(initialResource.spec);

  return (
      <WebSiteEditorComponent kind={initialResource.kind}
                              metadata={metadata}
                              spec={spec}
                              onDataChanged={(metadata, spec ) => {
                                setMetadata(metadata);
                                setSpec(spec);
                              }}
                              block={block} />
  )
};