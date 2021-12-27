import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MarkerComponent} from "../marker/marker.component";
import {DataService} from "../data.service";
import {Symptom} from "../models/Symptom";

@Component({
  selector: 'app-human-body',
  templateUrl: './human-body.component.html',
  styleUrls: ['./human-body.component.css']
})
export class HumanBodyComponent implements AfterViewInit {
  displayedColumns: string[] = ['select','position', 'name'];
  dataSource = new MatTableDataSource<Symptom>();
  // dataSource = new MatTableDataSource<PeriodicElement>(this.symptoms);
  clickedRows = new Set<Symptom>();
  selection = new SelectionModel<Symptom>(true, []);
  dotColor:string = 'red';
  symptoms: Symptom[] = [];
  selectedBodyPartId:number = -1;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private renderer: Renderer2,
              private dataService: DataService) {
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
  masterToggle() {debugger;
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**
   * Change selected dot color
   * @param event
   */
  changeDotColor(event: any) {
    alert(event.target.id.toString());
    let element = document.getElementById(event.currentTarget.attributes.id.nodeValue);
    this.dotColor=this.dotColor=='red'?'yellow':'red';
    if(element!=null){
      const child = element.children[0];
      this.renderer.setStyle(child, 'background-color', this.dotColor);
    }
    let selectedBodyPart =event.currentTarget.className.toString();
      if (this.dotColor=="yellow"){
        this.dataService.getSymptomsByBodyPart(selectedBodyPart).subscribe(
          data => {
            debugger;
            this.symptoms.length == 0?this.symptoms=data:this.symptoms.concat(data);
            // let currentBodyPartId = data[0].body_part;
            // console.log(data[0].body_part);
            // if(currentBodyPartId == this.selectedBodyPartId ){
              this.dataSource.data = this.symptoms;
            // }
          })
      this.selectedBodyPartId} else {
        const namesToDeleteSet = new Set(this.symptoms);
        this.symptoms = this.symptoms.filter((bodyPart) => {
          return !namesToDeleteSet.has(selectedBodyPart);
        });
        this.selectedBodyPartId = -1;
      }

  }
  generateIllness(){debugger;
    console.log(this.clickedRows);
  }
}
