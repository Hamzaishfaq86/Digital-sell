import React, { useState } from 'react';
import {Pagination} from '@shopify/polaris';
import {
  AppProvider,
  Page,
  Layout,
  EmptyState,
  TextField,
  Button,
  Select,
  Card,
  Divider
} from '@shopify/polaris';

function ManageProduct() {
  const [filterText, setFilterText] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const handleFilterChange = (value) => setFilterText(value);
  const handleStatusChange = (value) => setSelectedStatus(value);

  const statusOptions = [
    { label: 'All status', value: 'all' },
    { label: 'Live', value: 'Live' },
    { label: 'Archive', value: 'Archive' },
    { label: 'No File Assigned', value: 'No File Assigned' },
    { label: 'No Links Assigned', value: 'No Links Assigned' },
  ];

  return (
    <AppProvider>
      <Page
        title="Digital products"
        primaryAction={{ content: 'New digital product' }}
      >
        <Layout>
          {/* Search and Filter Section */}
          <Layout.Section>
            <Card sectioned>
              <div style={{ display: 'flex', gap: '10px', margin:"0px" ,padding:"0px" }}>
                <div style={{width:"90%"}}>
                <TextField
                  labelHidden
                  placeholder="Filter by product name"
                  value={filterText}
                  onChange={handleFilterChange}
                  autoComplete="off"
                />
                </div>
                <Select
                  options={statusOptions}
                  onChange={handleStatusChange}
                  value={selectedStatus}
                />
              </div>
            </Card>
          </Layout.Section>

          {/* Empty State Section */}

        
          <Layout.Section>
          <div style={{ margin: 0, padding: 0 }}>
            <Card>
            <EmptyState
              heading="Manage your digital products"
              action={{
                content: 'Create digital product',
                url: 'https://help.shopify.com',
                onAction: () => alert('Redirect to create product'),
              }}
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png" 
            >
              <p>Create and manage your digital products being sold to customers.</p>
            </EmptyState>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Pagination
            label="Page 1 / 1"
            hasPrevious
            onPrevious={() => {
              console.log('Previous');
            }}
            hasNext
            onNext={() => {
              console.log('Next');
            }}
          />
        </div>
   
            </Card>
            </div>
           
          </Layout.Section>
         
         
        </Layout>
      </Page>
    </AppProvider>
  );
}

export default ManageProduct;
