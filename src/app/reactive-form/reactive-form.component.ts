import { Appointment } from "../appointment";
import { Component } from "@angular/core";
@Component({
  selector: "simple-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent {
  daysOfTheWeek = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];

  availableOffices = [
    { id: "A", name: "ufficio_A" },
    { id: "B", name: "ufficio_B" },
    { id: "C", name: "ufficio_C" }
  ];
  
  applications = [{ id: 0 }, { id: 1 }, { id: 2 }];
}
