import {
  Component, OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  constructor() {
    console.log('constructor');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges', changes);

  }
  ngOnInit(): void {
    console.log('ngOninit');

  }
  ngDoCheck(): void {
    console.log('ngDocheck');

  }
  ngAfterContentInit(): void {
    console.log('ngAfter content init');

  }
  ngAfterContentChecked(): void {
    console.log('ngAfter content checked');

  }
  ngAfterViewInit(): void {
    console.log('ngAfter view init');

  }
  ngAfterViewChecked(): void {
    console.log('ngAfter view checked');

  }
  ngOnDestroy(): void {
    console.log('ngOn destroy');

  }

}


