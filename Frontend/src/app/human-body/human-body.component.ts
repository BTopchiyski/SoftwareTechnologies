import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component,Renderer2} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {DataService} from "../data.service";
import {Symptom} from "../models/Symptom";
import {Illness} from "../models/Illness";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-human-body',
  templateUrl: './human-body.component.html',
  styleUrls: ['./human-body.component.css']
})
export class HumanBodyComponent implements AfterViewInit {
  displayedColumns: string[] = ['select','position', 'name'];
  displayedColumnsSelectedSymptoms: string[] = ['name'];
  dataSource = new MatTableDataSource<Symptom>();
  dataSourceSelectedSymptoms = new MatTableDataSource<Symptom>();
  clickedRows = new Set<Symptom>();
  selection = new SelectionModel<Symptom>(true, []);
  symptoms: Symptom[] = [];
  selectedBodyPartId:number = -1;
  selectedSymptoms: Symptom[] = [];
  selectedDotsHash = new Map<string, boolean>();
  illnesses:Illness[] = [];
  generateButtonIsClicked=false;

  constructor(private renderer: Renderer2,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if(this.isAllSelected()){
    this.selection.clear()
      this.dataSource.data.forEach(row => this.selectedSymptoms = this.selectedSymptoms.filter(x=>x.name!=row.name));
    this.dataSourceSelectedSymptoms.data = this.selectedSymptoms;
    } else {
    this.dataSource.data.forEach(row => this.selection.select(row));
    this.selectedSymptoms = this.symptoms;
    this.dataSourceSelectedSymptoms.data = this.selectedSymptoms;
    }
  }

  toggleCheckbox(row:any) {
    this.selection.toggle(row);
    if(this.selectedSymptoms.some(x=>x.name == row.name)){
     this.selectedSymptoms = this.selectedSymptoms.filter(x=>x.name!=row.name);
    }else {
      this.selectedSymptoms.push(row);
    }console.log(row);
    this.dataSourceSelectedSymptoms.data = this.selectedSymptoms;
    row.selected = !row.selected;
  }

  populateSymptoms(data:any):Symptom[]{
    let symptoms:Symptom[] = [];
    for (let i = 0; i < data.length; i++) {
      let currSymptom = new Symptom(data[i].id, data[i].name,data[i].body_part);

      symptoms.push(currSymptom);
    }
    return symptoms;
  }

  populateIllnesses(data:any){
    for (let i = 0; i < data.length; i++){
      let currIllness = new Illness(data[i].name, data[i].description,data[i].symptoms);
      this.illnesses.push(currIllness);
    }
  }
  checkIfDotIsSelected(dotId:string): boolean {
   let isSelected = this.selectedDotsHash.get(dotId);
   if(isSelected!=undefined){
     this.selectedDotsHash.delete(dotId);
     return isSelected;
   } else {
     this.selectedDotsHash.set(dotId,true);
     return false;
   }
  }


  /**
   * Change selected dot color
   * @param event
   */
  changeDotColor(event: any) {
    let element = document.getElementById(event.currentTarget.attributes.id.nodeValue);
    let isDotAlreadySelected:boolean = this.checkIfDotIsSelected(event.currentTarget.attributes.id.nodeValue);
    let dotColor:string=isDotAlreadySelected==true?'red':'yellow';
    if(element!=null){
      const child = element.children[0];
      this.renderer.setStyle(child, 'background-color', dotColor);
    }
    let selectedBodyPart =event.currentTarget.className.toString();
    if (!isDotAlreadySelected){
      this.dataService.getSymptomsByBodyPart(selectedBodyPart).subscribe(
        data => {

          if(this.symptoms.length == 0){
            this.symptoms=this.populateSymptoms(data);
          } else {
            let newSymptoms = this.populateSymptoms(data);
            newSymptoms.forEach(sympt=>{
              this.symptoms.push(sympt)});

          }
          this.dataSource.data = this.symptoms;
        })
      this.selectedBodyPartId
      }
    else {
      let selectedBodyPartId:number;
        this.dataService.getBodyPartIdByName(event.currentTarget.className.toString()).subscribe(id => {
          selectedBodyPartId =  parseInt(id.toString());

          this.symptoms =  this.symptoms.filter(x=>x.bodyPartId!=selectedBodyPartId);
          this.dataSource.data = this.symptoms;
        })
    }

  }
  generateIllness(){
    let selectedSymptomsNames = this.selectedSymptoms.map(x =>  x.name);
    this.dataService.generateIllnessListBySymptoms(selectedSymptomsNames).subscribe( data => {
     this.populateIllnesses(data);
      this.router.navigate(['/illness'], {
        state: {
          illnesses:this.illnesses
        }
      });
    })
  }
}
