import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { LoginModule } from "./login/login.module";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

@NgModule({
  declarations: [AppComponent, InvoiceComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    AppRoutingModule,
    LoginModule,
    MatAutocompleteModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
