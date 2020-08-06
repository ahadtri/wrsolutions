import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginviewComponent } from "./loginview/loginview.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LoginviewComponent],
  exports: [LoginviewComponent],
})
export class LoginModule {}
