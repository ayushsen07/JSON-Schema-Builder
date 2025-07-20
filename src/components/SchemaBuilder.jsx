import React from 'react';
import { Card, Button } from 'antd';
import NestedFieldGroup from './NestedFieldGroup';

const SchemaBuilder = ({ data, onChange }) => {
  return (
    <Card title="JSON Schema Builder">
      <NestedFieldGroup value={data} onChange={onChange} />
      <Button style={{ marginTop: 16 }}>Submit</Button>
    </Card>
  );
};

export default SchemaBuilder;
