import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wojewodztwo',
  templateUrl: './wojewodztwo.component.html',
  styleUrls: ['./wojewodztwo.component.scss']
})
export class WojewodztwoComponent implements OnInit {
  carsData: any = [];
  wojName: string = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.wojName = this.dataService.wojName;
    this.dataService.getCarsData().subscribe(data => this.carsData = data);
  }

  setCarData(carAttributes: any){
    this.dataService.setCarData(carAttributes);
  }

  resetData(){
    this.dataService.setCarsData(null);
  }
}
