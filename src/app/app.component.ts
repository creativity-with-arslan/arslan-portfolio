import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { LearningComponent } from './components/learning/learning.component';
import { GithubSectionComponent } from './components/github-section/github-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    LearningComponent,
    GithubSectionComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="a1-shell">
      <div class="a1-noise"></div>

      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-education></app-education>
      <app-learning></app-learning>
      <app-github-section></app-github-section>
      <app-contact></app-contact>
      <app-footer></app-footer>

      <!-- Floating WhatsApp Button -->
      <a
        href="https://wa.me/923217177534"
        target="_blank"
        rel="noopener noreferrer"
        class="whatsapp-float"
        aria-label="Chat with me on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            d="M19.11 17.29c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.21 1.24.18 1.7.11.52-.08 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
          />
          <path
            d="M16.01 3.2c-7.08 0-12.84 5.76-12.84 12.84 0 2.26.59 4.47 1.72 6.42L3.2 28.8l6.5-1.7a12.8 12.8 0 0 0 6.31 1.66h.01c7.08 0 12.84-5.76 12.84-12.84S23.09 3.2 16.01 3.2zm0 23.45h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.86 1.01 1.03-3.76-.25-.39a10.62 10.62 0 1 1 8.88 4.85z"
          />
        </svg>
      </a>
    </div>
  `
})
export class AppComponent {}