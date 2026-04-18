import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutSectionComponent } from '../about/about-section.component';
import { EducationSectionComponent } from '../education/education-section.component';
import { ExperienceSectionComponent } from '../experience/experience-section.component';
import { ProjectsSectionComponent } from '../projects/projects-section.component';
import { SidebarProfileComponent } from '../sidebar-profile/sidebar-profile.component';
import { SkillsSectionComponent } from '../skills/skills-section.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { AchievementsSectionComponent } from '../achievements/achievements-section.component';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [
    SidebarProfileComponent,
    TopNavComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent,
    AchievementsSectionComponent,
  ],
  templateUrl: './portfolio-layout.component.html',
  styleUrl: './portfolio-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioLayoutComponent {}