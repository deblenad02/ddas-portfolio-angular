import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type EducationItem = {
  degree: string;
  specialization?: string;
  institution: string;
  location: string;
  period: string;
  score?: string;
};

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSectionComponent {
  protected readonly educationItems: readonly EducationItem[] = [
    {
      degree: 'Master in Science & Technology',
      specialization: 'Software Engineering and Digital Transformation',
      institution: "École supérieure d'ingénieurs en génie électrique (ESIGELEC)",
      location: 'Rouen, France',
      period: '02/2025 – Present',
      score: 'AVG - 15.38/20',
    },
    {
      degree: 'BTech - Computer Science and Business Systems',
      institution: 'Meghnad Saha Institute of Technology',
      location: 'Kolkata, India',
      period: '11/2020 – 06/2024',
      score: 'GPA - 9.51/10',
    },
  ];
}