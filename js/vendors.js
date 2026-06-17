async function initVendorsPage() {
  setupCrudModule({
    page: 'vendors',
    sheet: 'Vendors',
    singular: 'Vendor',
    idField: 'VendorID',
    idPrefix: 'VD',
    showView: true,
    tableFields: ['VendorName', 'Category', 'Status'],
    fields: [
      { name: 'VendorID', label: 'Vendor ID', required: true, readonly: true },
      { name: 'VendorName', label: 'Vendor Name', required: true },
      { name: 'Category', label: 'Category', type: 'select', options: ['Material', 'Tools', 'Consumables', 'Job Work', 'Maintenance', 'Office', 'Utility', 'Other'] },
      { name: 'GSTIN', label: 'GSTIN' },
      { name: 'Status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], defaultValue: 'Active' },
    ],
  });
}
