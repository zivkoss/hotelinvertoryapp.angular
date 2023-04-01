import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World from inline teplate!</h1>
  // <p>Angular is awsome</p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 { color: red }`]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  
  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = "Hilton Hotel";
  }
// @ViewChild('user', { read: ViewContainerRef } ) vcr!: ViewContainerRef;
// // role = 'Users';
// ngAfterViewInit() {
//   const componentRef = this.vcr.createComponent(RoomsComponent);
//   componentRef.instance.numberOfRooms = 50;
//   }  
}
