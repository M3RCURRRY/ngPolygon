import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  postData!: any;
  shipData!: any;
  userData!: any;

  constructor(private service: FetchService) { }

  ngOnInit(): void {
    this.service.fetchPost().subscribe(data => {
      this.postData = data;
    });

    this.service.fetchShip().subscribe(data => {
      this.shipData = data;
    })

    this.service.fetchUser().subscribe(data => {
      this.userData = data;
    })
  }
}
