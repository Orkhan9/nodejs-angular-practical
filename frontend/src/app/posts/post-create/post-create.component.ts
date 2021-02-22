import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Post} from "../post";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle:string='';
  enteredContent:string='';
  @Output() postCreated=new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(form:NgForm){
    if(form.invalid) return;
    const post:Post={
      title:form.value.title,
      content:form.value.content
    }
    this.postCreated.emit(post);
  }

}
