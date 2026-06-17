async function initAttendancePage() {
  setupCrudModule({
    page: 'attendance',
    sheet: 'Attendance',
    singular: 'Attendance',
    idField: 'AttendanceID',
    idPrefix: 'AT',
    defaultCurrentMonth: true,
    monthEmployeeFilter: true,
    preloadLookups: ['Employees'],
    showView: true,
    tableFields: ['Date', 'EmployeeID', 'CheckIn', 'CheckOut', 'WorkMinutes'],
    fields: [
      { name: 'AttendanceID', label: 'Attendance ID', required: true, readonly: true },
      { name: 'EmployeeID', label: 'Employee', required: true, lookup: { sheet: 'Employees', valueField: 'EmployeeID', labelFields: ['EmployeeName'] }, displayAs: 'employeeName' },
      { name: 'Date', label: 'Date', type: 'date', required: true },
      { name: 'CheckIn', label: 'Check In', type: 'time', displayAs: 'time' },
      { name: 'BreakStart', label: 'Break Start', type: 'time', displayAs: 'time' },
      { name: 'BreakEnd', label: 'Break End', type: 'time', displayAs: 'time' },
      { name: 'CheckOut', label: 'Check Out', type: 'time', displayAs: 'time' },
      { name: 'WorkMinutes', label: 'Work Hours', type: 'number', displayAs: 'hours', storeAsMinutes: true },
      { name: 'OTHours', label: 'OT Hours', type: 'number', displayAs: 'plainHours' },
      { name: 'Remarks', label: 'Remarks', type: 'textarea' },
    ],
  });
}
