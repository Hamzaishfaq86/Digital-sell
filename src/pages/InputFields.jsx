import {Card, FormLayout, TextField,Text,Divider,ButtonGroup,Button} from '@shopify/polaris';

import React from 'react';

function InputFeilds() {
  return (
    <Card>
        <div style={{marginRight:"88%",marginBottom:"1%"}}>
                   
                   <Text variant="headingXl" as="h3">
                     
                   Shop Details
                     </Text>
                     </div>
                     <Divider />
                     <div style={{marginTop:"40px"}}>
    <FormLayout>
      <FormLayout.Group>
        <TextField
        placeholder='example.myshopify.com'
          type="number"
          label="Shop Url"
          onChange={() => {}}
          autoComplete="off"
        />
        <TextField
        placeholder='Shop Token'
          type="number"
          label="Shop Token"
          onChange={() => {}}
          autoComplete="off"
        />
      </FormLayout.Group>
    </FormLayout>
    <FormLayout>
      <FormLayout.Group>
        <TextField
        placeholder='Api Key'
          type="number"
          label="Api Key"
          onChange={() => {}}
          autoComplete="off"
        />
        <TextField 
        placeholder='Api secret'
          type="number"
          label="Api secret"
          onChange={() => {}}
          autoComplete="off"
        />
      </FormLayout.Group>
    </FormLayout>
    </div>
    <div style={{marginTop:"3%",marginLeft:"96%"}}>
    <ButtonGroup>
      
      <Button variant="primary">Save</Button>
    </ButtonGroup>
    </div>
    </Card>
  );
}
export default InputFeilds;