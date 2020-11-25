import { Component, Input, OnInit } from '@angular/core';
import { ILaunchProgram } from 'src/app/common/launch-program.model';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  @Input() programDetails: ILaunchProgram[];

  constructor() { }

  ngOnInit(): void {
  }

}
