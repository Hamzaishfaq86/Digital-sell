import React, { useState } from "react";
import {
  Card,
  Layout,
  Page,
  TextField,
  Button,
  EmptyState,
  ResourceList,
  ResourceItem,
  Filters,
  Text,
  Badge,
  Grid,
  Pagination,
  Divider,
  Select
} from "@shopify/polaris";


function FileKeys() {
  const [searchValue, setSearchValue] = useState("");
  const [licenseKeys, setLicenseKeys] = useState([]);
   const [selectedStatus, setSelectedStatus] = useState('all');
  const handleStatusChange = (value) => setSelectedStatus(value);

  const statusOptions = [
    { label: 'All status', value: 'all' },
    { label: 'Live', value: 'Live' },
    { label: 'Archive', value: 'Archive' },
    { label: 'No File Assigned', value: 'No File Assigned' },
    { label: 'No Links Assigned', value: 'No Links Assigned' },
  ];

  const handleSearchChange = (value) => setSearchValue(value);

  return (
    <Page
      title="License keys"
      primaryAction={{ content: "Create license key", onAction: () => {} }}
    >
      <Layout>
        {/* Metrics Cards */}
      
         <div style={{width:"100%", height:"25%",display:"flex"}}>
            <div style={{width:"20%" ,marginLeft:"3%"}}>
            <Grid.Cell>
              <Card sectioned>
                <Text variant="headingMd" as="h3">
                  License keys
                </Text>
                <Text variant="headingMd" as="p" alignment="center">
                  0
                </Text>
              </Card>
            </Grid.Cell>
            </div>

            <div style={{width:"22%",marginLeft:"3%"}}>
            <Grid.Cell>
              
              <Card >
                <Text variant="headingMd" as="h3">
                  Assigned keys
                </Text>
                <Text variant="headingMd" as="p" alignment="center">
                  0
                </Text>
              </Card>
             
            </Grid.Cell>
            </div>
            <div style={{width:"22%",marginLeft:"3%"}}>
            <Grid.Cell>
              <Card >
                <Text variant="headingMd" as="h3">
                  Available keys
                </Text>
                <Text variant="headingMd" as="h3" >
                  0
                </Text>
              </Card>
            </Grid.Cell>
            </div>
            <div style={{width:"22%",marginLeft:"3%"}}>
            <Grid.Cell>
              <Card sectioned>
                <Text variant="headingMd" as="h3">
                  Out of stock
                </Text>
                <Text variant="headingMd" as="h3" >
                  0
                </Text>
              </Card>
            </Grid.Cell>
            </div>
            </div>
          
     

        {/* Search & Resource List */}
        <Layout.Section>
          <Card>
            
            <ResourceList
              resourceName={{ singular: "product", plural: "products" }}
              items={licenseKeys}
              renderItem={() => null}
              filterControl={
                <Filters
                queryPlaceholder="search by key or tag"
                  queryValue={searchValue}
                  onQueryChange={handleSearchChange}
                  onQueryClear={() => setSearchValue("")}
                  filters={[]}
                 
                />
                
                
              }
            
              
              
              emptyState={
                <EmptyState
                  heading="No Products found"
                 
                  image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                >
                  Try adjusting your search or creating a new license key.
                </EmptyState>
              }
            />
            
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
          
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default FileKeys;
