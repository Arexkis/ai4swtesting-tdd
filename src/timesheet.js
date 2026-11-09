class Timesheet {
    timesheets = new Map();

    submit(projectName, hours) {
        this.timesheets.set(projectName, hours);
        return true;
    }

    submitTimesheet(projectName, hours) {
        return this.submit(projectName, hours);
    }

    getTimesheets() {
        return [...this.timesheets.values()];
    }
}

module.exports = Timesheet;
