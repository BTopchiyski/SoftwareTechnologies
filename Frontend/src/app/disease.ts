export class Disease {
  diseaseID: number;
  diseaseName: string;
  description: String;

  constructor(diseaseID:number,diseaseName: string, description: String ) {
    this.diseaseID = diseaseID;
    this.diseaseName = diseaseName;
    this.description = description;
  }
}

