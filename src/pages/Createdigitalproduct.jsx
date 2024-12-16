
import React, { useState, useCallback } from "react";
import {
  Page,
  Card,
  TextField,
  Select,
  DropZone,
  Grid,
  Text,
  Tabs,
  Button,Checkbox
} from "@shopify/polaris";

export default function Createdigitalproduct() {
  const [name, setName] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("digital_files");
  const [selectedContent, setSelectedContent] = useState("digital_files");
  const [files, setFiles] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleNameChange = (value) => setName(value);
  const handleAccessChange = (value) => setSelectedAccess(value);
  const handleContentChange = (value) => setSelectedContent(value);
  const [limitDownloadInTime, setLimitDownloadInTime] = useState(false);
  const [limitDownloadPerOrder, setLimitDownloadPerOrder] = useState(false);
  

  const handleDropZoneDrop = useCallback((_dropFiles, acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const accessOptions = [{ label: "Digital file(s)", value: "digital_files" }];
  const contentOptions = [{ label: "Digital file(s)", value: "digital_files" }];

  const tabs = [
    { id: "download-email", content: "Download files email" },
    { id: "checkout", content: "Checkout" },
  ];
 
  return (
    <Page>
      <Grid columns={{ xs: 1, sm: 1, md: 2, lg: 2 }} gap="300">
        {/* Left Section */}
        <Grid.Cell>
            <div style={{ marginBottom:"10px"}}>

          <Card title="Select product">
            <div style={{marginTop:"10px", marginBottom:"10px"}}>

          <Button fullWidth>Add customer</Button>
            </div>
            <Text as="p" variant="bodyMd">
              Pick a product you want to link digital files with. When purchasing
              this product, customers will be able to download attached files.
            </Text>
            <Text as="p" variant="bodyMd" tone="subdued">
              If you don't have any product so far, start by{" "}
              <a href="#">creating a product</a>.
            </Text>
          </Card>
            </div>

          <Card>
            <Grid columns={{ xs: 1, sm: 1, md: 1, lg: 1 }} gap="200">
              <TextField
                label="Name"
                value={name}
                onChange={handleNameChange}
                autoComplete="off"
              />
              <Select
                label="Customer will get access to"
                options={accessOptions}
                value={selectedAccess}
                onChange={handleAccessChange}
              />
              <Select
                label="Digital product consists of"
                options={contentOptions}
                value={selectedContent}
                onChange={handleContentChange}
              />
              <Grid.Cell>
  <Checkbox
    label="Limit download in time"
    checked={limitDownloadInTime}
    onChange={(value) => setLimitDownloadInTime(value)}
  />
</Grid.Cell>
<Grid.Cell>
  <Checkbox
    label="Limit download per order"
    checked={limitDownloadPerOrder}
    onChange={(value) => setLimitDownloadPerOrder(value)}
  />
</Grid.Cell>

              <Select
                label="Notify previous customers when files / links are updated"
                options={[
                  { label: "Yes — please send an email", value: "yes" },
                  { label: "No — don't notify", value: "no" },
                ]}
              />
            </Grid>
          </Card>
  <div style={{ marginTop: "1rem" }}>

          <Card sectioned>
            <DropZone onDrop={handleDropZoneDrop}>
              <DropZone.FileUpload actionTitle="Drag & drop or select files" />
            </DropZone>
            {files.length > 0 && (
              <Grid columns={{ xs: 1 }} gap="100">
                {files.map((file, index) => (
                  <Text key={index}>{file.name}</Text>
                ))}
              </Grid>
            )}
          </Card>
  </div>
        </Grid.Cell>

        {/* Right Section */}
        

        <Grid.Cell>
        <div style={{position:"sticky"}}>
          <Card>
            <Tabs
              tabs={tabs}
              selected={selectedTab}
              onSelect={(selected) => setSelectedTab(selected)}
            >
              {/* Download Files Email */}
              {selectedTab === 0 && (
                <Grid columns={{ xs: 1, sm: 1, md: 2, lg: 2 , xl: 2, xxl: 2, xxxl: 2}} gap="200">
                  <Text as="p" variant="bodyMd">
                    <b>From:</b> softpulse1
                  </Text>
                  <Text as="p" variant="bodyMd">
                    <b>Subject:</b> Download your purchased files
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Hello <b>{`{name}`}</b>,
                  </Text>
                  <Text as="p" variant="bodyMd">
                    🎉 Thank you for purchasing from our store! <br />
                    You can download your purchased files below.
                  </Text>

                  <Card subdued>
                    <div
                      style={{
                        height: "60px",
                        background: "#f4f6f8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                        {/* <div style={{ display: "flex", alignItems: "left", justifyContent: "left", gap: "1px",width: "30px",height: "30px",backgroundColor: "white" }}>

                        <img src="" alt="" />
                        </div> */}
                      <Text as="p" alignment="center" variant="bodyMd">
                        File 
                      </Text>
                    </div>
                  </Card>

                  <Text as="p" variant="bodyMd">
                    If you have any questions, don't hesitate to contact our team.
                  </Text>
                  <Text as="p" variant="bodyMd">
                    Thanks, <br />
                    softpulse1 team
                  </Text>
                </Grid>
              )}

              {/* Checkout Section */}
              {selectedTab === 1 && (
                <Grid columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2, xxxl: 2 }} gap="200">
                  <Text as="p" variant="bodyMd">
                    🎉 Thank you for purchasing from our store! You can download
                    your files below.
                  </Text>

                  <Card subdued>
                    <div
                      style={{
                        height: "60px",
                        background: "#f4f6f8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 10px",
                      }}
                    >
                      <Text as="p" variant="bodyMd">
                        {`{product}`}
                      </Text>
                      <Button size="slim" primary>
                        Download
                      </Button>
                    </div>
                  </Card>

                  <Text as="p" variant="bodyMd">
                    You should receive an email with all your files within 5
                    minutes. Please check your spam folder if nothing arrives.
                  </Text>

                  <Button plain>Continue to confirmation</Button>
                </Grid>
              )}
            </Tabs>
          </Card>
        </div>
        </Grid.Cell>
       
      </Grid>
    </Page>
  );
}
