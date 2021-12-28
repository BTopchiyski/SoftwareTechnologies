export class Symptom {
  symptomId: number;
  name: String;
  bodyPartId: number;

  constructor(symptomId:number,name: String, bodyPartId: number ) {
    this.symptomId = symptomId;
    this.name = name;
    this.bodyPartId = bodyPartId;
  }
}
