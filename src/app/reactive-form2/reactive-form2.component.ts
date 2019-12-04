import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
@Component({
  selector: "simple-reactive-form-2",
  templateUrl: "./reactive-form2.component.html",
  styleUrls: ["./reactive-form2.component.css"]
})
export class ReactiveForm2Component {
  reactiveForm: FormGroup;
  ingredients: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      title: [""],
      ingredients: this.formBuilder.array([this.formBuilder.control("")])
    });
    this.ingredients = <FormArray>this.reactiveForm.get("ingredients");
  }
  
  addIngredient() {
    this.ingredients.push(this.formBuilder.control(""));
  }
}
