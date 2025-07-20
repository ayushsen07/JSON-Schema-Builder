import React, { useState } from 'react';
import SchemaBuilder from './components/SchemaBuilder';
import JsonPreview from './components/JsonPreview';

const App = () => {
  const [formData, setFormData] = useState({ fields: [] });

  return (
    <div style={{ padding: 20, display: 'flex', gap: 20 }}>
      <div style={{ width: '40%' }}>
        <SchemaBuilder data={formData} onChange={setFormData} />
      </div>
      <div style={{ width: '40%', backgroundColor : '#eeee' }}>
        <JsonPreview fields={formData.fields} />
      </div>
    </div>
  );
};

export default App;
