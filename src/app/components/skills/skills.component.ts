import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  // Edit this array to add/remove skill categories or technologies.
  skillGroups = [
    { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Bootstrap', 'Tailwind CSS'] },
    { title: 'Backend', items: ['PHP', 'Laravel', 'Node.js', 'REST APIs'] },
    { title: 'Programming', items: ['C', 'C++', 'Python'] },
    { title: 'Database & Tools', items: ['MySQL', 'Git', 'GitHub', 'Postman', 'VS Code'] },
    { title: 'Computer Science', items: ['OOP', 'Data Structures & Algorithms', 'Database Concepts', 'Software Engineering', 'Information Security'] },
  ];
}
