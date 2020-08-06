import { Routes } from "@angular/router";
import { InvoiceComponent } from "../invoice/invoice.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoginviewComponent } from "../login/loginview/loginview.component";

export const routes: Routes = [
  { path: "dash", component: DashboardComponent },
  { path: "invoice", component: InvoiceComponent },
  { path: "login", component: LoginviewComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
];
