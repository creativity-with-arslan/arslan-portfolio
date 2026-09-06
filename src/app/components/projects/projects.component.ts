import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Project {
  tag: string;
  title: string;
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
  feature: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  // Edit this array to add projects, update tech stacks, or fix links.
  // Replace each url below with your real GitHub repo / live demo link.
  projects: Project[] = [
    {
      tag: 'Personal Project',
      title: 'E-Commerce Store',
      description: 'A web application built while learning modern frontend development — product listing, product details, and a fully responsive UI backed by a mock REST API.',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'REST API', 'JSON Server'],
      links: [
        { label: 'Live Demo', url: 'YOUR_LIVE_DEMO_URL' },
        { label: 'View Code', url: 'https://github.com/creativity-with-arslan' },
      ],
      feature: 'Frontend Build',
    },
    {
      tag: 'University Project',
      title: 'Student Management System',
      description: 'An Object-Oriented Programming semester project practicing classes, encapsulation, inheritance, and polymorphism through a real data-handling system.',
      tech: ['C++', 'OOP'],
      links: [{ label: 'View Code', url: 'https://github.com/creativity-with-arslan' }],
      feature: 'OOP Practice',
    },
    {
      tag: 'Group Project',
      title: 'Library Management System',
      description: 'A C-based university group project handling structures, functions, file handling, and basic CRUD-style data management.',
      tech: ['C', 'File Handling', 'Data Management'],
      links: [{ label: 'View Code', url: 'https://github.com/creativity-with-arslan' }],
      feature: 'Group Project',
    },
    {
      tag: 'Digital Logic Design',
      title: 'Multiplexer Circuit Simulation',
      description: 'A Digital Logic Design project built in Proteus that helped me understand practical circuit simulation and logic design concepts.',
      tech: ['Proteus', 'Digital Logic Design'],
      links: [{ label: 'View Details', url: 'https://github.com/creativity-with-arslan' }],
      feature: 'Circuit Design',
    },
    {
      tag: 'Professional Development / Real-World Application Experience',
      title: 'Buying Group Web Application',
      description: 'Hands-on experience exploring an existing production-style codebase — an Angular frontend connected to a Laravel backend with MySQL. I worked with existing components, forms, and API integrations rather than building the system independently.',
      tech: ['Angular', 'Laravel', 'MySQL', 'REST APIs'],
      links: [{ label: 'Ask me about it', url: '#contact' }],
      feature: 'Real-World Exposure',
    },
  ];
}
