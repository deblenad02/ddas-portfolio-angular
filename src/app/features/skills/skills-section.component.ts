import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SkillCategory = {
  title: string;
  items: readonly string[];
};

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSectionComponent {
  protected readonly skillCategories: readonly SkillCategory[] = [
    {
      title: 'Programming Languages',
      items: ['Java', 'Python', 'C#/.Net', 'JavaScript'],
    },
    {
      title: 'Frontend & Web',
      items: ['HTML', 'CSS', 'Angular', 'ASP.NET', 'J2EE', 'Servlets', 'XML'],
    },
    {
      title: 'Backend, Database & API',
      items: ['MySQL', 'Database', 'PL/SQL', 'Oracle', 'API'],
    },
    {
      title: 'Frameworks & Technical Areas',
      items: ['Flask', 'PyTorch', 'UML', 'Data Structures'],
    },
    {
      title: 'Tools & Version Control',
      items: ['Git'],
    },
    {
      title: 'Operating Systems & IDEs',
      items: [
        'Windows',
        'Mac',
        'Linux',
        'Visual Studio Code',
        'Eclipse',
        'PyCharm',
        'Intellij',
      ],
    },
  ];
}