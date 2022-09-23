import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string;
  @Input() question: string;
  @Input() buttonText: string;
  @Input() colorHeader: string;
  @Output() onConfirm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  confirm(){
    this.onConfirm.emit(true);
  }

}
