import React from 'react';
import PropTypes from 'prop-types';
import {
  Panel,
  TraceAccordion,
  TraceSelector,
  DataSelector,
  Radio,
} from '../components';

import {localize} from '../lib';

const GraphCreatePanel = ({localize: _}) => (
  <Panel>
    <TraceAccordion canAdd>
      <TraceSelector label={_('Plot Type')} attr="type" show />

      <DataSelector label={_('Labels')} attr="labels" />

      <DataSelector label={_('Values')} attr="values" />

      <DataSelector label={_('X')} attr="x" />

      <DataSelector label={_('Y')} attr="y" />

      <DataSelector label={_('Z')} attr="z" />

      <DataSelector label={_('Open')} attr="open" />

      <DataSelector label={_('High')} attr="high" />

      <DataSelector label={_('Low')} attr="low" />

      <DataSelector label={_('Close')} attr="close" />

      <Radio
        label={_('Transpose')}
        attr="transpose"
        options={[
          {label: _('No'), value: false},
          {label: _('Yes'), value: true},
        ]}
      />
    </TraceAccordion>
  </Panel>
);

GraphCreatePanel.propTypes = {
  localize: PropTypes.func,
};

export default localize(GraphCreatePanel);
