import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;


   /* @ViewChild(HighlightedDirective)
    highlightedDirective : HighlightedDirective*/

    @ViewChild(CourseCardComponent,{read:HighlightedDirective})
    highlightedDirective : HighlightedDirective

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    constructor() {

    }

    onhighlightselected(isHighlighted){
      console.log(isHighlighted);
    }

    ngAfterViewInit() {
      console.log(this.highlightedDirective);
    }

    onCourseSelected(course:Course) {

    }

}
