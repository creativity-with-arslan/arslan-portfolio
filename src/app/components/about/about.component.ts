import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  // Edit this list to update the "learning journey" bullets in the About section.
  learningJourney: string[] = [
    'Frontend development with Angular',
    'Backend development with Laravel / PHP',
    'REST API development and testing',
    'Database systems',
    'C / C++ programming',
    'Object-Oriented Programming',
    'Data Structures and Algorithms',
    'Software development concepts',
    'AI / ML and Python',
  ];

  // Edit this list to update the quick-stat cards.
  stats = [
    { title: 'Computer Science Student', subtitle: 'University of Gujrat' },
    { title: 'Web Development', subtitle: 'Frontend + Backend' },
    { title: 'Frontend + Backend', subtitle: 'Angular · Laravel · MySQL' },
    { title: 'Always Learning', subtitle: 'One project at a time' },
  ];
}
