import { Component } from "@angular/core";

import { Appointment } from "./appointment";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "simple-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      name: [""],
      mail: [""],
      dayOfTheWeek: ["Lunedì"],
      fullAddress: this.formBuilder.group({
        address: [""],
        city: [""],
        zipCode: [""]
      }),
      office: ["ufficio_A"],
      applications: this.formBuilder.group({
        application_0: [false],
        application_1: [false],
        application_2: [false]
      })
    });
  }
  daysOfTheWeek = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"];

  availableOffices = [
    { id: "A", name: "ufficio_A" },
    { id: "B", name: "ufficio_B" },
    { id: "C", name: "ufficio_C" }
  ];

  applications = [{ id: 0 }, { id: 1 }, { id: 2 }];
}
