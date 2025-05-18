import { Component, Input,  OnInit  } from "@angular/core"; 
import { DATA } from "../../data/data";
import { Vegetable } from "../../model/vegetable";
import { AppComponent } from "../appcomponent/app.component";
@Component({
selector: 'vegetablepart',
templateUrl: 'vegetable.component.html',
styleUrls: ['vegetable.component.css']

})
export class VegetableComponent implements OnInit{


    @Input()
    fajta!: Vegetable;
    constructor(){ }

    ngOnInit():void {
    }

}