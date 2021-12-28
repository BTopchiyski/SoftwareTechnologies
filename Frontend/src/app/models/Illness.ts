import {Symptom} from "./Symptom";

export class Illness {
  name: String;
  description: String;
  symptoms: Symptom[] = [];

  constructor(name: String, description: String, symptoms:any ) {debugger;
    this.name = name;
    this.description = description;
    for (let i = 0; i < symptoms.length; i++){
      let currSymptom = new Symptom(symptoms[i].id, symptoms[i].name,symptoms[i].body_part);
      this.symptoms.push(currSymptom);
    }
  }
}
