import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabular-rep',
  templateUrl: './tabular-rep.component.html',
  styleUrls: ['./tabular-rep.component.css']
})
export class TabularRepComponent implements OnInit{
  phase:any;
  order:any;
  alphas:any = ["1", "2",];
  tabName:any=["Overall Readiness","Backup & Batch Job Processing (18:00 – 00:00)",];
  tabEdit:any=[true,true];
  enable:any=false;
  title = 'itnc-app';
  name : any='hello thjuhuhre';
  showproduct : any =true;
  arr : { [key:string]:any; } = {'1':['1','2'],'2':['1','2','3']};
  key:number=1;

  constructor(){
  }
  ngOnInit() {
    this.phase=history.state;
    this.order=this.phase['order']
    }
  onBtnClick(){
    this.alphas.push((this.alphas.length+1).toString());
    this.tabEdit.push(true);
    this.tabName.push("Add Table Name");
    this.arr[(this.alphas.length).toString()]=['1'];
  
  }
  editBtnClick(i:any){
    this.tabEdit[i]=!this.tabEdit[i];
  }
  onDelTable(){
    var i=this.alphas.length;
    if(i>1){
    this.alphas.pop();
    this.tabEdit.pop();
    this.tabName.pop();
    this.arr[i.toString()]=null;
    }
    else{
      alert('Cannot delete last Table!!');
    }
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
    if(this.arr[i]==null||this.arr[i].length<=1){
      alert("Cannot delete the last row");
     }
     else
     this.arr[i].pop();
  }
  checkArray(i:any){
    return Array.isArray(i);
  }
  onAddSubStages(i:any){
    if(!Array.isArray(this.tabName[i])){
      this.tabName[i]=[this.tabName[i],'Add Sub Stage Name'];
      this.arr[this.alphas[i]]=[['1']];
      this.tabEdit[i]=[true,false];
    }else{
      this.tabName[i].push('Add Sub Stage Name');
      this.arr[this.alphas[i]].push(['1']);
      this.tabEdit[i].push(false)
    }
  }
  onDelsubStages(i:any){
    if(Array.isArray(this.tabName[i]) && this.tabName[i].length>2){
      this.tabName[i].pop();
      this.arr[this.alphas[i]].pop();
      this.tabEdit[i].pop();
    }
    else{
      this.arr[this.alphas[i]]=['1'];
      this.tabName[i]=this.tabName[i][0];
      this.tabEdit[i]=true;
    }
  }
  editSubStage(i:any,j:any){
    this.tabEdit[i][j]=!this.tabEdit[i][j];
  }
  onAddSubRow(i:any,j:any){
  //this.arr[this.alphas[i]][j].pop();
  if(this.arr[this.alphas[i]][j]==null){
    this.arr[this.alphas[i]][j]=['1'];
   }
   else
   this.arr[this.alphas[i]][j].push((this.arr[this.alphas[i]][j].length+1).toString());
  }
  onDelSubRow(i:any,j:any){
    this.arr[this.alphas[i]][j].pop();
  }

}
