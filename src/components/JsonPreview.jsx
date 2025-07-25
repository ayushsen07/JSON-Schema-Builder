import React from 'react';
import { Typography } from 'antd';


// build a json object from dynamic field input
const buildJsonFromFields = (fields) => {
  const result = {};
  for (const field of fields) {
    if (!field.key) continue;
    if (field.type === 'nested') {
      result[field.key] = buildJsonFromFields(field.fields || []);
    } 
    else if(field.type==='string'){
       result[field.key]= field.type.toUpperCase()
     }
    else {
      result[field.key] = field.type;
    }
  }
  return result;
};

//display the generated json preview 
const JsonPreview = ({ fields }) => {
  const result = buildJsonFromFields(fields);
  return (
    <div>
      <Typography.Title level={5}>Generated JSON</Typography.Title>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default JsonPreview;
