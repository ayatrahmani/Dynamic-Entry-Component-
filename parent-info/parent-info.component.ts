import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.scss']
})
export class ParentInfoComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
    alert(this.message);
  }

}
