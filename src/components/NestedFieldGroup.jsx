import React, { useState } from 'react';
import { Button } from 'antd';
import FieldInput from './FieldInput';


/**  To-Do for this
 * handle nesting of items
 * add field
 * remove feild
 * values changing of key and type 
 * edit fields
 *  */  



//handle nested element for the items
const NestedFieldGroup = ({ value = {}, onChange }) => {
  const [fields, setFields] = useState(value.fields || []);


  const updateFields = (newFields) => {
    setFields(newFields);
    onChange({ ...value, fields: newFields });
  };

  const handleAdd = () => {
    const newFields = [...fields, { key: '', type: '' }];
    updateFields(newFields);
  };

  const handleRemove = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    updateFields(newFields);
  };

  const handleKeyChange = (index, newKey) => {
    const newFields = [...fields];
    newFields[index].key = newKey;
    updateFields(newFields);
  };

  const handleTypeChange = (index, newType) => {
    const newFields = [...fields];
    newFields[index].type = newType;
    updateFields(newFields);
  };

  const handleNestedChange = (index, updatedField) => {
    const newFields = [...fields];
    newFields[index] = updatedField;
    updateFields(newFields);
  };

  return (
    <div style={{ borderLeft: '2px solid #ccc', paddingLeft: 10 }}>
      {fields.map((field, index) => (
        <div
          key={index}
          style={{
            marginBottom: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            marginLeft: 10,
          }}
        >
          <FieldInput
            field={field}
            index={index}
            onKeyChange={handleKeyChange}
            onTypeChange={handleTypeChange}
            onRemove={handleRemove}
          />
          {field.type === 'nested' && (
            <div style={{ marginLeft: 16 }}>
              <NestedFieldGroup
                value={field}
                onChange={(updated) => handleNestedChange(index, updated)}
              />
            </div>
          )}
        </div>
      ))}

      <Button type="primary" size="small" onClick={handleAdd}>
        + Add Item
      </Button>
    </div>
  );
};

export default NestedFieldGroup;
