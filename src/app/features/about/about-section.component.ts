import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  protected readonly focusAreas: readonly string[] = [
    'Full-Stack Development',
    'Angular Frontend',
    'C# / .NET Backend',
    'AI-Oriented Workflows',
    'Medical Image Analysis',
    'AI for Healthcare',
  ];

  protected readonly highlights: readonly { label: string; value: string }[] = [
    {
      label: 'Current Role',
      value: 'Full-Stack Intern at Presage SAS',
    },
    {
      label: 'Current Degree',
      value: 'Master’s in Software Engineering and Digital Transformation',
    },
    {
      label: 'Location',
      value: 'Meudon / Paris, France',
    },
  ];
}