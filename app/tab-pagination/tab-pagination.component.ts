import { Component, OnInit } from '@angular/core';
//import { MatPaginator, MatTableDataSource } from '@angular/material';
/**
 * @title Paginator
 */
@Component({
  selector: 'app-tab-pagination',
  templateUrl: './tab-pagination.component.html',
  styleUrls: ['./tab-pagination.component.css']
})
export class TabPaginationComponent implements OnInit{
  alphas:any = ["1", "2"];
  tabName:any=["Overall Readiness","Backup & Batch Job Processing (18:00 – 00:00)"];
  tabEdit:any=[true,true];
  enable:any=false;
  title = 'itnc-app';
  name : any='hello thjuhuhre';
  showproduct : any =true;
  arr : { [key:string]:any; } = {'1':['1','2'],'2':['1','2','3']};

  colleges: any[] = [{ name: "1" }, { name: "2" }, { name: "3" }, { name: "4" }, { name: "5" }, { name: "6" }, { name: "7" }, { name: "8" }, { name: "9" }, { name: "10" }, { name: "11" }, { name: "12" }, { name: "13" }];

  filteredArray: any[] = []

  defaultRecords: any = 5;

  ngOnInit() {
    this.filteredArray = this.colleges.slice(0, this.defaultRecords);
  }

  onPaginateChange(data:any) {
    this.filteredArray = this.colleges.slice(0, data.pageSize);
  }
  constructor(){
    setTimeout(()=>{
this.enable=true;
    },2000)
  }

 
  onBtnClick(){
    // this.name="COMPANY NAME";
    // this.showproduct=false;
   // var a=this.alphas.length+1;
    this.alphas.push((this.alphas.length+1).toString());
    this.tabEdit.push(true);
    this.tabName.push("Add Table Name");
    // this.alphas.push('5');
    console.log(this.alphas);
  }
  editBtnClick(i:any){
    this.tabEdit[i]=!this.tabEdit[i];
  }
  onAddRow(i:any){
    if(this.arr[i]==null){
     this.arr[i]=['1'];
    }
    else
    this.arr[i].push((this.arr[i].length+1).toString());
    console.log(this.arr);
  }
  onDelRow(i:any){
    if(this.arr[i]==null){
     }
     else
     this.arr[i].pop();
  }

}
