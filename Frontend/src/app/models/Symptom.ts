export class Symptom {
  symptomId: number;
  symptomName: String;
  bodyPartId: number;

  constructor(symptomId:number,symptomName: String, bodyPartId: number ) {
    this.symptomId = symptomId;
    this.symptomName = symptomName;
    this.bodyPartId = bodyPartId;
  }
}
