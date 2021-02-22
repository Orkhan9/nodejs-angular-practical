import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts=[
  //   {title:'1st post title',content:'1st post content'},
  //   {title:'2nd post title',content:'2nd post content'},
  //   {title:'3rd post title',content:'3rd post content'},
  //   {title:'4th post title',content:'4th post content'}
  // ]
  @Input() posts:Post[]=[];
  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
  }

}
