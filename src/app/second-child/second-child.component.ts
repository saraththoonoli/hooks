import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent {
@Input() test:any;


onButtonClick() {
  alert('Button clicked in the parent component!');
}
 

}
