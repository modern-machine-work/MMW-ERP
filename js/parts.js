async function initPartsPage() {
  setupCrudModule({
    page: 'parts',
    sheet: 'Parts',
    singular: 'Part',
    idField: 'PartID',
    idPrefix: 'PT',
    showView: true,
    tableFields: ['PartID', 'PartName', 'ClientCode', 'Status'],
    fields: [
      { name: 'PartID', label: 'Part ID', required: true, readonly: true },
      { name: 'PartName', label: 'Part Name', required: true },
      { name: 'ClientCode', label: 'Client', required: true, lookup: { sheet: 'Clients', valueField: 'ClientCode', labelFields: ['ClientName'] }, displayFrom: { sheet: 'Clients', valueField: 'ClientCode', labelFields: ['ClientName'] } },
      { name: 'DrawingNo', label: 'Drawing No' },
      { name: 'Status', label: 'Status', type: 'select', options: ['Active', 'Inactive'], defaultValue: 'Active' },
    ],
  });
}
