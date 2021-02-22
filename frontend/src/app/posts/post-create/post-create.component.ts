import {Component, OnInit} from '@angular/core';
import {Post} from "../post";
import {NgForm} from "@angular/forms";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredTitle:string='';
  enteredContent:string='';
  constructor(private postService:PostsService) { }

  ngOnInit(): void {
  }

  onAddPost(form:NgForm){
    if(form.invalid) return;
    this.postService.addPost(form.value.title,form.value.content);
  }
}
