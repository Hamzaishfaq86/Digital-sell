import React from "react";
import {
  Card,
  Layout,
  Page,
  Text,
  Button,
  Badge,
  List,
  Link,
 
} from "@shopify/polaris";

function Price() {
  return (
    <Page title="Pricing">
      <Layout>
        <Layout.Section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {/* Pro Plan */}
            <Card title="Pro" sectioned>
            <div style={{marginRight:"70%"}}>
          
          <Text variant="headingXl" as="h3">
            
         Pro
            </Text>
            </div>
              <Text variant="bodyMd" as="p" tone="subdued">
                Great for stores that are just starting out
              </Text>
              <Text variant="headingXl" as="h3">
                $12.49 <Text variant="bodyMd" as="span">/ month</Text>
              </Text>
              <div style={{ marginTop: "12px" }}>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>Unlimited products</li>
                  <li>Unlimited orders</li>
                  <li>Unlimited downloads</li>
                  <li>Unlimited license keys</li>
                  <li>10 GB of storage</li>
                </ul>
              </div>
              <Button fullWidth  variant="primary" >Upgrade now</Button>
            </Card>

            {/* Plus Plan */}
            <Card title="Plus" sectioned>
            <div style={{marginRight:"70%"}}>
          
          <Text variant="headingXl" as="h3">
            
        Plus
            </Text>
            </div>
              
              <Text variant="bodyMd" as="p" tone="subdued">
                Great for stores that are growing
              </Text>
              <Text variant="headingXl" as="h3">
                $19.99 <Text variant="bodyMd" as="span">/ month</Text>
              </Text>
              <div style={{ marginTop: "12px" }}>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>Unlimited products</li>
                  <li>Unlimited orders</li>
                  <li>Unlimited downloads</li>
                  <li>Unlimited license keys</li>
                  <li>50 GB of storage</li>
                </ul>
              </div>
              <Button fullWidth  variant="primary">Upgrade now</Button>
            </Card>

            {/* Ultra Plan */}
            <Card title="Ultra" sectioned>
            <div style={{marginRight:"70%"}}>
          
          <Text variant="headingXl" as="h3">
            
         Ultra
            </Text>
            </div>
              <Text variant="bodyMd" as="p" tone="subdued">
                Great for stores that need a lot of storage
              </Text>
              <Text variant="headingXl" as="h3">
                $49.99 <Text variant="bodyMd" as="span">/ month</Text>
              </Text>
              <div style={{ marginTop: "12px" }}>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  <li>Unlimited products</li>
                  <li>Unlimited orders</li>
                  <li>Unlimited downloads</li>
                  <li>Unlimited license keys</li>
                  <li>1,000 GB of storage</li>
                </ul>
              </div>
              <Button fullWidth  variant="primary">Upgrade now</Button>
            </Card>
          </div>
        </Layout.Section>
        <Layout.Section>
            
          <Card title="Enterprise" >
            <div style={{marginRight:"84%"}}>
          
          <Text variant="headingXl" as="h3">
            
          Enterprise
            </Text>
            </div>
            <div style={{marginRight:"60%"}}>
          
            <Text variant="bodyMd" as="p" tone="subdued">
              Great for stores that need a lot of storage and <Link url="https://www.bigdigitaldownload.com/terms-and-conditions">bandwidth</Link>
            </Text>
            <Text variant="headingXl" as="h3">
              $54.99 <Text variant="bodyMd" as="span">/ month</Text>
            </Text>
            <List>
              <List.Item>Unlimited products</List.Item>
              <List.Item>Unlimited orders</List.Item>
              <List.Item>Unlimited downloads</List.Item>
              <List.Item>Unlimited license keys</List.Item>
              <List.Item>1,000 GB of storage</List.Item>
              <List.Item>$0.023 USD / GB of Bandwidth</List.Item>
            </List>
            </div>
            <div style={{ marginTop: "16px" }}>
              <Button fullWidth variant="primary">Upgrade now</Button>
            </div>
          
          </Card>

        </Layout.Section>
        <Layout.Section>
            
            <Card title="Enterprise" >
              <div style={{marginRight:"80%"}}>
            
            <Text variant="headingXl" as="h3">
              
            Free
              </Text>
              </div>
              <div style={{marginRight:"60%"}}>
            
              <Text variant="bodyMd" as="p" tone="subdued">
              Great for stores that want to try out our app 
              </Text>
              <Text variant="headingXl" as="h3">
                $0.00 <Text variant="bodyMd" as="span">/ month</Text>
              </Text>
              <List>
                <List.Item>Sell any file type</List.Item>
                <List.Item>Unlimited downloads</List.Item>
                <List.Item>Unlimited license keys</List.Item>
                <List.Item>Automatic email delivery</List.Item>
                <List.Item>Add your brand</List.Item>
                <List.Item>Upload up to 75MB Storage (+150MB verify)</List.Item>
                <List.Item>Up to 3 products</List.Item>
                <List.Item>Up 15 orders</List.Item>

              </List>
              </div>
              <div style={{ marginTop: "16px" }}>
                <Button fullWidth >Upgrade now</Button>
              </div>
            
            </Card>
  
          </Layout.Section>
      </Layout>
    </Page>
  );
}

export default Price;
