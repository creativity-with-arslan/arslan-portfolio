import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-github-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './github-section.component.html',
})
export class GithubSectionComponent {
  githubUrl = 'https://github.com/creativity-with-arslan';

  tiles = [
    { icon: '⌘', title: 'GitHub', subtitle: 'Profile & repositories', link: this.githubUrl },
    { icon: '▣', title: 'Projects', subtitle: "What I've built", link: '#projects' },
    { icon: '◈', title: 'Experiments', subtitle: 'Sandbox & practice code', link: this.githubUrl },
    { icon: '↗', title: 'Learning', subtitle: 'Currently improving', link: '#learning' },
  ];
}
