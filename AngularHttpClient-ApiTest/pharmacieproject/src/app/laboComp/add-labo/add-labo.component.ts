import { Component, OnInit } from '@angular/core';
import {Laboratoire} from '../../models/laboratoire';
import {LaboService} from '../../services/labo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-labo',
  templateUrl: './add-labo.component.html',
  styleUrls: ['./add-labo.component.css']
})
export class AddLaboComponent implements OnInit {

  lab: Laboratoire = new Laboratoire();
  constructor(private labService: LaboService, private route: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  saveLab(){
    this.labService.addLabo(this.lab).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }
  lablist(){
    this.route.navigate(['/laboratoires']);
  }
  onSubmit(){
  console.log(this.lab);
  console.log(this.labService.addLabo(this.lab));
  this.saveLab();
  this.lablist();
  }
}
