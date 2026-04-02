const fs = require("fs");
const path = require("path");
const report = require("multiple-cucumber-html-reporter");

const reportsDir = path.resolve(__dirname, "reports");

// Create 'reports' directory if it doesn't exist
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

report.generate({
  jsonDir: "./reports",
  reportPath: "./reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "146",
    },
    device: "My local system",
    platform: {
      name: "windows",
      version: "11.0",
    },
  },
  customData: {
    title: "Sample project login",
    data: [
      { label: "Project", value: "saucedemo" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" }
     
    ],
  },
});