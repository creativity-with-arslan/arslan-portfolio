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

@Component({selector:'app-root',standalone:true,imports:[NavbarComponent,HeroComponent,AboutComponent,SkillsComponent,ProjectsComponent,ExperienceComponent,EducationComponent,LearningComponent,GithubSectionComponent,ContactComponent,FooterComponent],template:`<div class="a1-shell"><div class="a1-noise"></div><app-navbar></app-navbar><app-hero></app-hero><app-about></app-about><app-skills></app-skills><app-projects></app-projects><app-experience></app-experience><app-education></app-education><app-learning></app-learning><app-github-section></app-github-section><app-contact></app-contact><app-footer></app-footer></div>`})
export class AppComponent {}
