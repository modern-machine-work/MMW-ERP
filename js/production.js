async function initProductionPage() {
  setupCrudModule({
    page: 'production',
    sheet: 'Production',
    singular: 'Production',
    idField: 'ProductionID',
    idPrefix: 'PR',
    showView: true,
    tableFields: ['Date', 'OrderID', 'MachineID', 'EmployeeID', 'OKQty', 'Code'],
    fields: [
      { name: 'ProductionID', label: 'Production ID', required: true, readonly: true },
      { name: 'Date', label: 'Date', type: 'date', required: true },
      { name: 'OrderID', label: 'Order', required: true, lookup: { sheet: 'Orders', valueField: 'OrderID', labelFields: ['PartID', 'ClientCode'] }, displayFrom: { sheet: 'Orders', valueField: 'OrderID', labelFields: ['PartID'] } },
      { name: 'SetupNo', label: 'Setup No' },
      { name: 'ProgramNo', label: 'Program No' },
      { name: 'CycleTime', label: 'Cycle Time', type: 'number', displayAs: 'minutes', min: 0.01 },
      { name: 'MachineID', label: 'Machine', required: true, lookup: { sheet: 'Machines', valueField: 'MachineID', labelFields: ['MachineName'] }, displayFrom: { sheet: 'Machines', valueField: 'MachineID', labelFields: ['MachineName'] } },
      { name: 'EmployeeID', label: 'Employee', required: true, lookup: { sheet: 'Employees', valueField: 'EmployeeID', labelFields: ['EmployeeName'] }, displayFrom: { sheet: 'Employees', valueField: 'EmployeeID', labelFields: ['EmployeeName'] } },
      { name: 'Shift', label: 'Shift', type: 'select', options: ['Day', 'Night'], defaultValue: 'Day' },
      { name: 'Code', label: 'Code', hidden: true, defaultValue: 'P' },
      { name: 'OKQty', label: 'OK Qty', type: 'number' },
      { name: 'ReworkQty', label: 'Rework Qty', type: 'number' },
      { name: 'RejectQty', label: 'Reject Qty', type: 'number' },
      { name: 'Remarks', label: 'Remarks', type: 'textarea' },
    ],
  });
}
