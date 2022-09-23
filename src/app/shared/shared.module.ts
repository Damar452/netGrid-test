import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ConfirmModalComponent, FooterComponent, HeaderComponent],
  exports: [ConfirmModalComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
