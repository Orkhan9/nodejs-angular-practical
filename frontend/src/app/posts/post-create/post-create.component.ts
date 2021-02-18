import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredValue:string='';
  newPost:string='No Content';
  constructor() { }

  ngOnInit(): void {
  }

  onSavePost(){
    this.newPost=this.enteredValue;
  }

}
