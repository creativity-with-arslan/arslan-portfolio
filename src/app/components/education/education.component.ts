import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './education.component.html',
})
export class EducationComponent {
  subjects = [
    'Programming',
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Database Concepts',
    'Digital Logic Design',
    'Discrete Mathematics',
    'Calculus',
    'Applied Physics',
    'Information Security',
    'Software Development Concepts',
  ];
}
