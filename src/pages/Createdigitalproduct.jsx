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
  Button,
  Checkbox,
  Modal,
  InlineStack,
  Image,
  Box,
  FormLayout,



} from "@shopify/polaris";

export default function Createdigitalproduct() {
  const [name, setName] = useState("");
  const [selectedAccess, setSelectedAccess] = useState("digital_files");
  const [selected2Access, setSelected2Access] = useState("digital_files");
  const [selectedContent, setSelectedContent] = useState("digital_files");
  const [files, setFiles] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [showTextField, setShowTextField] = useState(false);


  const handleNameChange = (value) => setName(value);
  const handleAccessChange = (value) => setSelectedAccess(value);

  const handleContentChange = (value) => setSelectedContent(value);
  const [limitDownloadInTime, setLimitDownloadInTime] = useState(false);
  const [limitDownloadPerOrder, setLimitDownloadPerOrder] = useState(false);

  const handleDropZoneDrop = useCallback((_dropFiles, acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const toggleModal = useCallback(() => setIsModalActive((active) => !active), []);





  const accessOptions = [{ label: "Digital file(s)", value: "digital_files" },
  { label: "Digital file(s)+ License key", value: "Digital file(s)+ License key" },
  { label: "License key", value: "License key" }
  ];
  const access2Options = [
    { label: "Use my own licence key", value: "Use my own licence key" },
    { label: "Generate new License key", value: "Generate new License key" }
  ];
  const contentOptions = [
    { label: "Digital file(s)", value: "digital_files" },
    { label: "Digital file(s)+ Link", value: "Digital file(s)+ Link" },
    { label: "Link", value: "Link" },



  ];

  const tabs = [
    { id: "download-email", content: "Download files email" },
    { id: "checkout", content: "Checkout" },
  ];

  const [searchValue, setSearchValue] = useState('');





  const [hoveredProduct, setHoveredProduct] = useState(null); // Keep track of the hovered product
  const [productsDisplayed, setProductsDisplayed] = useState(10); // Tracks how many products to display
  const [selectedProducts, setSelectedProducts] = useState([]); // Tracks selected products by their index

  const products = Array.from({ length: 50 }, () => ({
    name: `MICROSOFT WINDOWS 11 ENTERPRISE LTSC 2024`,
    stock: 995,
    price: '€0.00',
    image: 'https://via.placeholder.com/50',
  }));






  const [addedProducts, setAddedProducts] = useState([]);
  const handleSearchChange = (value) => setSearchValue(value);

  const toggleCheckbox = (index) => {
    setSelectedProducts((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  const handleAccess2Change = (value) => {
    setSelected2Access(value);
    setShowTextField(value !== ""); // Show the TextField if an option is selected
  };


  const loadMoreProducts = () => setProductsDisplayed((prev) => prev + 2);

  const handleAddProducts = () => {
    // Add selected products to the main page
    const selectedProductData = products.filter((_, index) =>
      selectedProducts.includes(index)
    );
    setAddedProducts((prev) => [...prev, ...selectedProductData]);
    setSelectedProducts([]); // Clear selected products
    toggleModal(); // Close the modal
  };
  const handleDelete = (index) => {
    const updatedProducts = addedProducts.filter((_, i) => i !== index);
    setAddedProducts(updatedProducts); // Use your state updater here
  };
  return (
    <Page>
      <Grid columns={{ xs: 1, sm: 1, md: 2, lg: 2 }} gap="300">
        {/* Left Section */}
        <Grid.Cell>
          <div style={{ marginBottom: "10px" }}>
            <Card title="Select product">


              <Text as="p" variant="bodyMd">
                Pick a product you want to link digital files with. When
                purchasing this product, customers will be able to download
                attached files.
              </Text>

              <Text as="p" variant="bodyMd" tone="subdued">
                If you dont have any product so far, start by{" "}
                <a href="#">creating a product</a>.
              </Text>
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <Button fullWidth onClick={toggleModal}>
                  Select Product
                </Button>
              </div>
              <div style={{ marginTop: "20px" }}>
                <Text as="h2" variant="headingMd">
                  Selected Products
                </Text>
                {addedProducts.length > 0 ? (
                  addedProducts.map((product, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "10px 0",
                      }}
                    >
                      <Image
                        source={product.image}
                        alt={`Image of ${product.name}`}
                        width="50px"
                      />
                      <Text as="p" style={{ marginLeft: "10px" }}>
                        {product.name} - {product.price}
                      </Text>
                      <button
                        onClick={() => handleDelete(index)}
                        style={{
                          marginLeft: "10px",
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          padding: "5px 10px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  ))
                ) : (
                  <Text as="p">No products selected yet.</Text>
                )}
              </div>
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

                label="License key"
                options={access2Options}
                value={selected2Access}
                onChange={handleAccess2Change}
              />
              {showTextField && (
                <TextField
                  placeholder="Licence key"
                  label="Licence key tag"
                  onChange={() => { }}
                  autoComplete="off"
                />
              )}
              <Select
                label="Digital product consists of"
                options={contentOptions}
                value={selectedContent}
                onChange={handleContentChange}
              />
              <div style={{ display: "flex", flexDirection: "row" }}>

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
              </div>



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
          <Card>
            <FormLayout>
              <FormLayout.Group>
                <Select
                  label="License type "
                  options={[
                    { label: "Single", value: "Single" },
                    { label: "Multi", value: "Multi" },
                    { label: "Subscription", value: "Subscription" },
                  ]}
                />
                <Select
                  label="Asset_type "
                  options={[
                    { label: "File", value: "File" },
                    { labe2: "License", value: "License" },

                  ]}
                />
                <TextField
                  placeholder='Issue Date'

                  label="Issue Date"
                  onChange={() => { }}
                  autoComplete="off"
                />
                <TextField
                  placeholder='Version'

                  label="Version"
                  onChange={() => { }}
                  autoComplete="off"
                />
              </FormLayout.Group>
            </FormLayout>
          </Card>
          </div>
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
          <div style={{ position: "sticky" }}>
            <Card>
              <Tabs
                tabs={tabs}
                selected={selectedTab}
                onSelect={(selected) => setSelectedTab(selected)}
              >
                {/* Download Files Email */}
                {selectedTab === 0 && (
                  <Grid
                    columns={{
                      xs: 1,
                      sm: 1,
                      md: 2,
                      lg: 2,
                      xl: 2,
                      xxl: 2,
                      xxxl: 2,
                    }}
                    gap="200"
                  >
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
                        <Text as="p" alignment="center" variant="bodyMd">
                          File
                        </Text>
                      </div>
                    </Card>

                    <Text as="p" variant="bodyMd">
                      If you have any questions, dont hesitate to contact our
                      team.
                    </Text>
                    <Text as="p" variant="bodyMd">
                      Thanks, <br />
                      softpulse1 team
                    </Text>
                  </Grid>
                )}

                {/* Checkout Section */}
                {selectedTab === 1 && (
                  <Grid
                    columns={{
                      xs: 1,
                      sm: 1,
                      md: 2,
                      lg: 2,
                      xl: 2,
                      xxl: 2,
                      xxxl: 2,
                    }}
                    gap="200"
                  >
                    <Text as="p" variant="bodyMd">
                      🎉 Thank you for purchasing from our store! You can
                      download your files below.
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

      {/* Modal Component */}
      <div>


        <Modal
          open={isModalActive}
          onClose={toggleModal}
          title="Select Product"
          primaryAction={{
            content: "Add",
            onAction: handleAddProducts,
          }}
          secondaryActions={[
            {
              content: "Cancel",
              onAction: toggleModal,
            },
          ]}
        >
          <Modal.Section>
            <Card>
              {/* Search Field */}
              <TextField
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search for products"
                autoComplete="off"
              />

              {/* Product List */}
              {products.slice(0, productsDisplayed).map((product, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredProduct(index)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  style={{
                    marginTop: "5%",
                    cursor: "pointer",
                    backgroundColor:
                      hoveredProduct === index ? "#f0f0f0" : "transparent",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <InlineStack wrap={false}>
                    <Checkbox
                      checked={selectedProducts.includes(index)}
                      onChange={() => toggleCheckbox(index)}
                    />
                    <Image
                      source={product.image}
                      alt={`Image of ${product.name}`}
                      width="7%"
                    />
                    <div
                      style={{
                        marginTop: "4px",
                        display: "flex",
                        marginLeft: "2%",
                      }}
                    >
                      <Text as="p" variant="bodyMd" fontWeight="bold">
                        {product.name}
                      </Text>
                      <Text as="p" color="subdued">
                        {product.stock} available &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        {product.price}
                      </Text>
                    </div>
                  </InlineStack>
                </div>
              ))}

              {/* Load More Button */}
              {productsDisplayed < products.length && (
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <Button onClick={loadMoreProducts}>Load More</Button>
                </div>
              )}
            </Card>
          </Modal.Section>
        </Modal>

        {/* Display Selected Products */}

      </div>
    </Page>
  );
}
