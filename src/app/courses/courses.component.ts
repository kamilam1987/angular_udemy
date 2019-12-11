
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';


@Component({
  selector: 'courses',
  template: `
  {{ course.title | uppercase | lowercase }} <br/>
  {{ course.rating | number:'1.1-1' }} <br/>
  {{ course.students | number }} <br/>
  {{ course.price | currency: 'EUR':true:'3.2-2' }} <br/>
  {{ course.relasedDate | date:'shortDate'}}
  `
  
})
export class CoursesComponent implements OnInit {
  
  course = {
    title: "Angular course",
    rating: 4.9745,
    students: 30123,
    price: 150.49,
    relasedDate: new Date(2019, 6, 1)
  
  }

  ngOnInit() {
  }

}
