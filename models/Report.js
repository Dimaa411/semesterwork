class Report {
    constructor(reportType, periodFrom, data) {
        this.reportType = reportType;
        this.periodFrom = periodFrom;
        this.data = data;
    }

    generateReport() {
        console.log(` Report Type: ${this.reportType}`);
        console.log(` Period: ${this.periodFrom}`);
        console.log(" Information:");
        console.table(this.data);
    }
    export(format) {
        if (format === "json") {
            console.log("Export to json");
            console.log(JSON.stringify(this.data, null, 2));
        } else if (format === "csv") {
            console.log("Export to CSV:");
            if (Array.isArray(this.data) && this.data.length > 0) {
                let csv = Object.keys(this.data[0]).join(",") + "\n";
                csv += this.data.map(row => Object.values(row).join(",")).join("\n");
                console.log(csv);
            } else {
                console.error("No data to export.");
            }
        } else {
            console.error("unknown format " + format);
        }
    }
}

export default Report