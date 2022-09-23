import { Component, OnInit } from '@angular/core';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private storageService: StorageService){}

  ngOnInit(): void {
  }

  public closeSesion(){
    this.storageService.clear();
    location.reload();
  }

  public get isSession(){
    return this.storageService.getUserData();
  }

}
