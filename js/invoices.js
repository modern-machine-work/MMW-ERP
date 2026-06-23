async function initInvoicesPage() {
  setupCrudModule({
    page: 'invoices',
    sheet: 'Invoices',
    singular: 'Invoice',
    idField: 'InvoiceID',
    idPrefix: 'IN',
    financialYearFilter: true,
    monthField: 'InvoiceDate',
    showView: true,
    tableFields: ['InvoiceNo', 'ClientCode', 'InvoiceDate', 'Amount', 'PaymentStatus'],
    fields: [
      { name: 'InvoiceID', label: 'Invoice ID', required: true, readonly: true },
      { name: 'InvoiceNo', label: 'Invoice No', readonly: true, display(rowValue, row) { return row.FinancialYear ? `${row.FinancialYear} / ${rowValue}` : rowValue; } },
      { name: 'FinancialYear', label: 'Financial Year', readonly: true },
      { name: 'OrderID', label: 'Orders', multiple: true, lookup: { sheet: 'Orders', valueField: 'OrderID', labelFields: ['PartID', 'ClientCode'] } },
      { name: 'ClientCode', label: 'Client', required: true, lookup: { sheet: 'Clients', valueField: 'ClientCode', labelFields: ['ClientName'] }, displayFrom: { sheet: 'Clients', valueField: 'ClientCode', labelFields: ['ClientName'] } },
      { name: 'InvoiceDate', label: 'Invoice Date', type: 'date', required: true },
      { name: 'Amount', label: 'Amount', type: 'number' },
      { name: 'DueDate', label: 'Due Date', type: 'date' },
      { name: 'PaymentStatus', label: 'Payment Status', type: 'select', options: ['Unpaid', 'Partial', 'Paid', 'Overdue'], defaultValue: 'Unpaid' },
      { name: 'PaymentDate', label: 'Payment Date', type: 'date' },
      { name: 'IncludeInReports', label: 'Include In Reports', type: 'select', options: ['Yes', 'No'], defaultValue: 'Yes' },
    ],
  });
}
