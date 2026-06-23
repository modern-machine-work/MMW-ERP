async function initVendorPaymentsPage() {
  setupCrudModule({
    page: 'vendorPayments',
    sheet: 'VendorPayments',
    singular: 'Vendor Payment',
    idField: 'PaymentID',
    idPrefix: 'VP',
    showView: true,
    monthField: 'DueDate',
    tableFields: ['DueDate', 'VendorID', 'AmountPaid', 'PaymentStatus'],
    fields: [
      { name: 'PaymentID', label: 'Payment ID', required: true, readonly: true },
      { name: 'VendorID', label: 'Vendor', required: true, lookup: { sheet: 'Vendors', valueField: 'VendorID', labelFields: ['VendorName'] }, displayFrom: { sheet: 'Vendors', valueField: 'VendorID', labelFields: ['VendorName'] } },
      { name: 'AmountPaid', label: 'Amount Paid', type: 'number', required: true },
      { name: 'BillDate', label: 'Bill Date', type: 'date', required: true },
      { name: 'DueDate', label: 'Due Date', type: 'date', required: true },
      { name: 'PaymentDate', label: 'Payment Date', type: 'date' },
      { name: 'PaymentStatus', label: 'Payment Status', type: 'select', options: ['Unpaid', 'Paid'], defaultValue: 'Unpaid' },
      { name: 'PaymentMode', label: 'Payment Mode', type: 'select', options: ['Cash', 'Bank', 'UPI', 'Cheque'], defaultValue: 'Bank' },
      { name: 'ReferenceNo', label: 'Reference No' },
      { name: 'Remarks', label: 'Remarks', type: 'textarea' },
    ],
  });
}
