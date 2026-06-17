async function initMachinesPage() {
  setupCrudModule({
    page: 'machines',
    sheet: 'Machines',
    singular: 'Machine',
    idField: 'MachineID',
    idPrefix: 'MC',
    showView: false,
    tableFields: ['MachineID', 'MachineName', 'MachineType', 'Status'],
    fields: [
      { name: 'MachineID', label: 'Machine ID', required: true, readonly: true },
      { name: 'MachineName', label: 'Machine Name', required: true },
      { name: 'MachineType', label: 'Machine Type' },
      { name: 'Status', label: 'Status', type: 'select', options: ['Active', 'Inactive', 'Maintenance'], defaultValue: 'Active' },
    ],
  });
}
