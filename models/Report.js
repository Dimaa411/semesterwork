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
            console.log("Експорт у JSON:");
            console.log(JSON.stringify(this.data, null, 2));
        } else if (format === "csv") {
            console.log("Експорт у CSV:");
            if (Array.isArray(this.data) && this.data.length > 0) {
                let csv = Object.keys(this.data[0]).join(",") + "\n"; // Заголовки
                csv += this.data.map(row => Object.values(row).join(",")).join("\n"); // Дані
                console.log(csv);
            } else {
                console.error("Немає даних для експорту.");
            }
        } else {
            console.error("Невідомий формат експорту.");
        }
    }
}


export default Report