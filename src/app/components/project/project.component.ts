import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() imgPath: string;
  @Input() address: string;
  @Input() yearFinish: string;
  @Input() duration: string;

  constructor() { }

  ngOnInit(): void {
  }

}
