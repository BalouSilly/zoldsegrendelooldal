import { Component } from "@angular/core";
import { DATA } from "../../data/data";
import { Vegetable } from "../../model/vegetable";
import { VegetableComponent } from "../vegetable/vegetable.component";
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrl: 'app.component.css',
    imports: [VegetableComponent]
})
export class AppComponent{
    repa = DATA[0];
    retek = DATA[1];
    burgonya = DATA[2];
    hagyma = DATA[3];
    brokkoli = DATA[4];
    zeller = DATA[5];
    spenot = DATA [6];
    kaposzta = DATA [7];
    uborka = DATA [8];

    title = "Pál gazda boltja"
}