import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './learning.component.html',
})
export class LearningComponent {
  currentlyLearning = [
    'Angular', 'Laravel', 'PHP', 'REST APIs', 'MySQL',
    'Data Structures', 'Node.js', 'Python', 'AI / ML', 'Software Engineering',
  ];
}
