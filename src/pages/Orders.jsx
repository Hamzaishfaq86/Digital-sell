import React, { useState, useCallback } from "react";
import {
  Page,
  Card,
  TextField,
  Button,
  DatePicker,
  EmptyState,
  Select,
  Pagination,
  Layout,
  Text,
  ActionList,
  Popover,
} from "@shopify/polaris";
import { CalendarIcon, ExportIcon } from "@shopify/polaris-icons";


export default function OrdersPage() {
  const [queryValue, setQueryValue] = useState("");
  const [selectedDates, setSelectedDates] = useState({
    start: new Date(new Date().setDate(new Date().getDate() - 365)), // Start 365 days ago
    end: new Date(), // End is today
  });

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [popoverActive, setPopoverActive] = useState(false);
  const [datePickerActive, setDatePickerActive] = useState(false);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((active) => !active),
    []
  );

  const toggleDatePickerActive = useCallback(() => {
    setDatePickerActive((active) => !active);

    // Pre-select the Last 365 Days date range
    if (!datePickerActive) {
      const today = new Date();
      const lastYear = new Date();
      lastYear.setDate(today.getDate() - 365);
      setSelectedDates({ start: lastYear, end: today });
    }
  }, [datePickerActive]);

  const handleQueryChange = useCallback((value) => setQueryValue(value), []);
  const handleQueryClear = useCallback(() => setQueryValue(""), []);
  const handleMonthChange = useCallback((month, year) => {
    setMonth(month);
    setYear(year);
  }, []);

  const options = [
    { label: "All products", value: "all" },
    { label: "Digital products", value: "digital" },
  ];

  return (
    <Page fullWidth>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Text as="h1" variant="headingXl">
          Orders
        </Text>
        <Button variant="primary">Create an order</Button>
      </div>

      {/* Filter Bar */}
      <Card sectioned>
        <div style={{ display: "flex", gap: "1%", alignItems: "center" }}>
          <div style={{ flex: 6 }}>
            <div style={{ minWidth: "100px", width: "100%" }}>
              <TextField
                placeholder="Filter by customer name, order number"
                value={queryValue}
                onChange={handleQueryChange}
                clearButton
                onClearButtonClick={handleQueryClear}
              />
            </div>
          </div>

          {/* Date Picker */}
          <Popover
          
            active={datePickerActive}
            activator={
              <Button icon={CalendarIcon} onClick={toggleDatePickerActive}>
                Last 365 days
              </Button>
            }
            onClose={toggleDatePickerActive}
          >
            <DatePicker
              month={month}
              year={year}
              onChange={setSelectedDates}
              onMonthChange={handleMonthChange}
              selected={selectedDates}
              allowRange
            />
          </Popover>


          <div style={{  }}>
            <div style={{ minWidth: "110px" }}>
              <Select options={options} value="all" />
            </div>
          </div>
          <div>
            <Popover
              active={popoverActive}
              activator={
                <Button
                  onClick={togglePopoverActive}
                  disclosure
                  icon={ExportIcon}
                >
                  Export
                </Button>
              }
              onClose={togglePopoverActive}
            >
              <ActionList
                items={[
                  { content: "Export as CSV", onAction: () => alert("CSV Export") },
                  { content: "Export as Excel", onAction: () => alert("Excel Export") },
                ]}
              />
            </Popover>
          </div>
        </div>
      </Card>

      {/* Empty State */}
      <Card>
        <EmptyState
          heading="No orders found"
          action={{
            content: "Create an order",
            onAction: () => alert("Create order clicked!"),
          }}
          image="https://cdn.shopify.com/shopifycloud/web/assets/v1/empty-states/orders-light-c80e193484142ab9aa1f07a64614a8f1c1ac67633d56d7b2376db6f5f91b6f92.svg"
        >
          <p>No orders found for the selected date range and products.</p>
        </EmptyState>
      </Card>

      {/* Pagination */}
      <Card>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            label="Results"
            hasPrevious
            onPrevious={() => {
              console.log("Previous");
            }}
            hasNext
            onNext={() => {
              console.log("Next");
            }}
          />
        </div>
      </Card>
    </Page>
  );
}

