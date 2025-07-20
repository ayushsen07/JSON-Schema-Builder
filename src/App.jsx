import React, { useState } from 'react';
import SchemaBuilder from './components/SchemaBuilder';
import JsonPreview from './components/JsonPreview';

const App = () => {
  const [formData, setFormData] = useState({ fields: [] });

  return (
    <div className='p-5 gap-5  flex md:flex-row flex-col'>
      <div className='border-1 border-gray-300 md:w-[40%] w-[80%]' >
        <SchemaBuilder data={formData} onChange={setFormData} />
      </div>
      <div className='bg-gray-300 md:w-[40%] w-[80%]'>
        <JsonPreview fields={formData.fields} />
      </div>
    </div>
  );
};

export default App;
