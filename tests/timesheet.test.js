const Timesheet = require('../src/timesheet');

test('returns true when submitted with a project name and hours', () => {
    const timesheet = new Timesheet();
    expect(timesheet.submit('Project Name', 2)).toBe(true);
});
