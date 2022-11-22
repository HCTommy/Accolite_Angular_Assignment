import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name:any;
  icon:any;
  products:any=[{name:"apple",icon:"https://via.placeholder.com/150/92c952"},{name:"banana",icon:"https://via.placeholder.com/150/771796"}];
  
  addProduct():void{
    this.products.push({name:this.name,icon:this.icon})
  }

}
