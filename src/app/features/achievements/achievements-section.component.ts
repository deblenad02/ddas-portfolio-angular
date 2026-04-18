import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type AchievementItem = {
  title: string;
  organization: string;
  year: string;
};

type LanguageItem = {
  name: string;
};

@Component({
  selector: 'app-achievements-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements-section.component.html',
  styleUrl: './achievements-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementsSectionComponent {
  protected readonly achievements: readonly AchievementItem[] = [
    {
      title: 'International Young Achiever Award',
      organization: 'ESIGELEC',
      year: '2025',
    },
    {
      title: 'International Student Ambassador',
      organization: 'ESIGELEC',
      year: '2025',
    },
  ];

  protected readonly languages: readonly LanguageItem[] = [
    { name: 'English' },
    { name: 'French' },
    { name: 'Hindi' },
    { name: 'Bengali' },
  ];
}