import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../post.model";
import {PostsService} from "../posts.service";
import {Subscription} from "rxjs";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
  posts:Post[]=[];
  isLoading:boolean=false;
  totalPosts=10;
  postsPerPage=1;
  pageSizeOptions=[1,2,5,10];
  private postsSub=new Subscription();
  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.postsService.getPosts();
    this.postsSub=this.postsService.getPostsUpdatedListener()
      .subscribe((posts:Post[])=>{
        this.isLoading=false;
        this.posts=posts;
      })
  }

  onChangedPage(pageData:PageEvent){
    console.log(pageData)
  }

  onDelete(postId:string){
    this.postsService.deletePost(postId);
  }

  ngOnDestroy():void{
    this.postsSub.unsubscribe();
  }

}
