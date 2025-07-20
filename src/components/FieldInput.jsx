import React from 'react';
import { Input, Select, Switch } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

// set the field types string, number, nested
const FIELD_TYPES = ['string', 'number', 'nested'];

// feild inputs 
const FieldInput = ({ field, index, onKeyChange, onTypeChange, onRemove }) => {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Input
        placeholder="Key"
        value={field.key}
        onChange={(e) => onKeyChange(index, e.target.value)}
      />
      <Select 
        placeholder="Field Type"
        value={field.type || null}
        onChange={(val) => onTypeChange(index, val)}
        style={{ width: 400 }}
        options={FIELD_TYPES.map((type) => ({ label: type, value: type }))}
      />
      <Switch/>
      <CloseOutlined onClick={() => onRemove(index)} />
      
    </div>
  );
};

export default FieldInput;
