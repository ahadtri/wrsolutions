import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  chart = [];
  constructor() {}

  ngOnInit() {
    this.chart = new Chart("canvas", {
      type: "line",
      data: {
        labels: [
          "1 March 2020",
          "2 March 2020",
          "3 March 2020",
          "3 March 2020",
          "4 March 2020",
          "5 March 2020",
          "6 March 2020",
          "7 March 2020",
        ],
        datasets: [
          {
            label: "g1",
            data: [4000, 6000, 7900, 5900, 4500, 5900, 7900, 8300],
            backgroundColor: "blue",
            borderColor: "blue",
            fill: false,
          },
        ],
      },
    });
  }
}
