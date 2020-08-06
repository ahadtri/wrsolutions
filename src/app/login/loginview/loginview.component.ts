import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-loginview",
  templateUrl: "./loginview.component.html",
  styleUrls: ["./loginview.component.scss"],
})
export class LoginviewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  abc() {
    // this.router.navigate(["dash"]);
    const userId = document.querySelector(".userId") as HTMLInputElement;
    const passWord = document.querySelector(".password") as HTMLInputElement;
    const x = userId.value;
    const y = passWord.value;
    if (x === "admin" && y === "123456") {
      this.router.navigate(["dash"]);
    }
  }
}
