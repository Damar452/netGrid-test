import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {}

  public closeSesion(){
    this.storageService.clear();
    location.reload();
  }

  public get isSession(){
    return this.storageService.getUserData();
  }

}
