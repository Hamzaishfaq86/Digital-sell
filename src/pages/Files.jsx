import React, { useState } from 'react';
import { Page, Card, Button, DropZone, TextField,Divider,EmptyState } from '@shopify/polaris';

const Files = () => {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState('');
   

  const handleDrop = (droppedFiles) => {
    // Update the state with the dropped files
    setFiles([...files, ...droppedFiles]);
  };

  const handleFileNameChange = (newFileName) => {
    setFileName(newFileName);
  };

  return (
    <Page title="Manage your files">
      <Card sectioned>
        <DropZone
          onDrop={handleDrop}
          label="Drag & drop or select files"
          accept="image/*,application/pdf"
        >
          {files.length > 0 ? (
            <div>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div style={{marginTop:"5%"}}>
           <Button>Drag & drop or select file</Button>
           </div>
          )}
        </DropZone>
      </Card>
      <Card sectioned>
        <TextField
          label="Filter by file name"
          value={fileName}
          onChange={handleFileNameChange}
        />
        <div style={{marginTop:"2%"}}>
        <Divider />
        </div>
                    <EmptyState
                      heading="Manage your digital products"
                      
                      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png" 
                    >
                      <p>Create and manage your digital products being sold to customers.</p>
                    </EmptyState>
      </Card>
    </Page>
  );
};

export default Files;
