import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component,OnInit,Renderer2} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {DataService} from "../data.service";
import {Symptom} from "../models/Symptom";
import {Illness} from "../models/Illness";
import {ActivatedRoute, Router} from "@angular/router";
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AddIllnessDialogComponent } from '../add-illness-dialog/add-illness-dialog.component';
import { AddSymptomDialogComponent } from '../add-symptom-dialog/add-symptom-dialog.component';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';


@Component({
  selector: 'app-human-body',
  templateUrl: './human-body.component.html',
  styleUrls: ['./human-body.component.css']
})
export class HumanBodyComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name'];
  displayedColumnsSelectedSymptoms: string[] = ['name'];
  dataSource = new MatTableDataSource<Symptom>();
  dataSourceSelectedSymptoms = new MatTableDataSource<Symptom>();
  clickedRows = new Set<Symptom>();
  selection = new SelectionModel<Symptom>(true, []);
  symptoms: Symptom[] = [];
  selectedSymptoms: Symptom[] = [];
  selectedDotsHash = new Map<string, boolean>();
  illnesses:Illness[] = [];
  isAdmin:boolean=false;
  currentUserSubject:BehaviorSubject<User> = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));

  constructor(private renderer: Renderer2,
              private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit() {debugger;
    this.isAdmin = this.checkIfUserIsAdmin();
  }
  /**
   * Method that checks whether the number of selected elements matches the total number of rows
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Method that selects all rows if they are not all selected; otherwise clear selection.
   */
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

  /**
   * Method that adds selected symptom to selected symptoms table,
   * every time when row is selected, and removes unselected sumptom - when row is unselected
   * @param row - selected row
   */
  toggleCheckbox(row:any) {
    this.selection.toggle(row);
    if(this.selectedSymptoms.some(x=>x.name == row.name)){
     this.selectedSymptoms = this.selectedSymptoms.filter(x=>x.name!=row.name);
    }else {
      this.selectedSymptoms.push(row);
    }
    this.dataSourceSelectedSymptoms.data = this.selectedSymptoms;
    row.selected = !row.selected;
  }

  /**
   * Method that uses the data parameter to create an array of objects of type Symptom
   * @param data
   */
  populateSymptoms(data:any):Symptom[]{
    let symptoms:Symptom[] = [];
    for (let i = 0; i < data.length; i++) {
      let currSymptom = new Symptom(data[i].id, data[i].name,data[i].body_part);

      symptoms.push(currSymptom);
    }
    return symptoms;
  }

  /**
   * Method that uses the data parameter to create an array of objects of type Illness
   * @param data
   */
  populateIllnesses(data:any){
    for (let i = 0; i < data.length; i++){
      let currIllness = new Illness(data[i].name, data[i].description,data[i].symptoms);
      this.illnesses.push(currIllness);
    }
  }

  /**
   * Method that checks if current dot is already selected
   * @param dotId - id of current dot
   */
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
   * Method that changes dot color and fill table with Symptoms
   * @param event
   */
  changeDotColor(event: any) {debugger;
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
          debugger;
          if(this.symptoms.length == 0){
            this.symptoms=this.populateSymptoms(data);
          } else {
            let newSymptoms = this.populateSymptoms(data);
            newSymptoms.forEach(sympt=>{
              this.symptoms.push(sympt)});

          }
          this.dataSource.data = this.symptoms;
        })
      }
    else {
      let selectedBodyPartId:number;
        this.dataService.getBodyPartIdByName(event.currentTarget.className.toString()).subscribe(id => {debugger;
          selectedBodyPartId =  parseInt(id.toString());

          this.symptoms =  this.symptoms.filter(x=>x.bodyPartId!=selectedBodyPartId);
          this.selectedSymptoms =  this.selectedSymptoms.filter(x=>x.bodyPartId!=selectedBodyPartId);
          this.dataSourceSelectedSymptoms.data = this.selectedSymptoms;
          this.dataSource.data = this.symptoms;
        })
    }

  }
  generateIllness(){
    if(this.selectedSymptoms.length>0){
      let selectedSymptomsNames = this.selectedSymptoms.map(x =>  x.name);
      this.dataService.generateIllnessListBySymptoms(selectedSymptomsNames).subscribe( data => {
       this.populateIllnesses(data);
        this.router.navigate(['/illness'], {
          state: {
            illnesses:this.illnesses
          }
        });
      })
    } else {
      const matDialogConfig = new MatDialogConfig();
      matDialogConfig.width = "300px";
       let dialogRef = this.dialog.open(MessageDialogComponent, matDialogConfig);
      dialogRef.afterClosed().subscribe();
    }
  
  }

  checkIfUserIsAdmin():boolean {     
    let role:string = this.currentUserSubject.getValue().roles;
    if(role[0] =='Patient'){
      return false;
    }
    return true;   
  }

  openDialog(key:string) {debugger;
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.width = "600px";
    // matDialogConfig.height = "480px";
    let dialogRef:any = {};
    if(key=="illness"){
      dialogRef = this.dialog.open(AddIllnessDialogComponent, matDialogConfig);
    } else {
      dialogRef = this.dialog.open(AddSymptomDialogComponent, matDialogConfig);
    }
   
    // const dialogRef = this.dialog.open(AddIllnessDialogComponent);

    dialogRef.afterClosed().subscribe();
  }
}
