import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MarkerComponent} from "../marker/marker.component";

export interface PeriodicElement {
  name: string;
  position: number;
  bodyPart:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'cough', bodyPart: 'Throat'},
  {position: 2, name: 'food comes back up',  bodyPart: 'Throat'},
  {position: 3, name: 'high pitched breathing',  bodyPart: 'Throat'},
  {position: 4, name: 'burping',  bodyPart: 'Stomach'},
  {position: 5, name: 'upper belly bloating',  bodyPart: 'Stomach'},
  {position: 6, name: 'upper stomach pain',  bodyPart: 'Stomach'},
  {position: 7, name: 'lump in shoulder',  bodyPart: 'Shoulder'},
  {position: 8, name: 'shoulder muscle twitching', bodyPart: 'Shoulder'},
  {position: 9, name: 'fever',  bodyPart: 'Head'},
  {position: 10, name: 'forehead is tender', bodyPart: 'Head'},
];
@Component({
  selector: 'app-human-body',
  templateUrl: './human-body.component.html',
  styleUrls: ['./human-body.component.css']
})
export class HumanBodyComponent implements AfterViewInit {
  displayedColumns: string[] = ['select','position', 'name', 'bodyPart'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  // @ViewChild(MatPaginator) paginator: MatPaginator;

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
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
