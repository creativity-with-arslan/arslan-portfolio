import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  timeline = [
    {
      title: 'Computer Science Student',
      org: 'University of Gujrat',
      description: 'Building foundations in programming, data structures, object-oriented programming, databases, digital logic, mathematics, and software development.',
      tags: [] as string[],
    },
    {
      title: 'Web Development Journey',
      org: 'Frontend → Backend',
      description: 'Started with HTML, moved through CSS and JavaScript, then Bootstrap and Tailwind, before picking up Angular for building structured frontend applications.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'Angular'],
    },
    {
      title: 'Backend & Data',
      org: 'Expanding the stack',
      description: 'Expanded toward backend development with PHP and Laravel, building REST APIs and working with MySQL databases.',
      tags: ['PHP', 'Laravel', 'REST APIs', 'MySQL'],
    },
    {
      title: 'Currently Exploring',
      org: 'Broadening the toolkit',
      description: 'Node.js, Python, and the fundamentals of AI/ML — building a wider foundation for future software engineering work.',
      tags: ['Node.js', 'Python', 'AI / ML'],
    },
  ];
}
