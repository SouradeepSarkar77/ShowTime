import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private service:MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];
  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    })
  }

  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;
    })
  }
}
