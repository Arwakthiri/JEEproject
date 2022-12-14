import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../../models/fournisseur";
import {FourService} from "../../services/four.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addfour',
  templateUrl: './addfour.component.html',
  styleUrls: ['./addfour.component.css']
})
export class AddfourComponent implements OnInit {

  fournisseur: Fournisseur = new Fournisseur();
  constructor(private fourService: FourService, private route: Router) { }

  ngOnInit(): void {
  }

  fourlist(){
    this.route.navigate(['/fournisseurs']);
  }
  savefour(){
    this.fourService.addFour(this.fournisseur).subscribe(data=>{
      console.log(data);
    }, error => console.log(error));
  }
  onSubmit(){
    console.log(this.fournisseur);
    this.savefour();
    this.fourlist();
  }
}
