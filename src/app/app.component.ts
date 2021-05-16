import { Component,  ElementRef ,ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {jsPDF } from 'jspdf';
import html2canvas from  'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){};

  public downloadPdf(): void {
    console.log('downloading pdf...');
    const doc = new jsPDF();

    doc.save('first.pdf');
  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'fjkvncfjvcn',
    'dsfxxv',
    'vkhvjdhjdh',
    'jkfhjkhjk',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
    'Go to gym'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  } 
}
