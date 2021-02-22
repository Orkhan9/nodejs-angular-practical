import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../post";
import {PostsService} from "../posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
  // posts=[
  //   {title:'1st post title',content:'1st post content'},
  //   {title:'2nd post title',content:'2nd post content'},
  //   {title:'3rd post title',content:'3rd post content'},
  //   {title:'4th post title',content:'4th post content'}
  // ]
  posts:Post[]=[];
  private postsSub=new Subscription();
  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.posts=this.postsService.getPosts();
    this.postsSub=this.postsService.getPostsUpdatedListener()
      .subscribe((posts:Post[])=>{
        this.posts=posts;
      })
  }

  ngOnDestroy():void{
    this.postsSub.unsubscribe();
  }

}
