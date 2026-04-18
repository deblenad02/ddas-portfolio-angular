import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  protected isDialogOpen = false;

  protected readonly stackPreview: readonly string[] = [
    'Angular',
    'C# / .NET',
    'SQL / Migrations',
    'Python Integration',
    'LLM Workflow',
  ];

  protected readonly responsibilities: readonly string[] = [
    'Developing and modifying frontend features in Angular, including new UI sections and improvements to existing components.',
    'Contributing to backend development in C# by implementing services, endpoints, and business logic for product features.',
    'Working on database-related changes, including schema updates and migrations to support new functionality.',
    'Contributing to an end-to-end LLM-based patient call workflow across dashboard, scheduling, backend logic, and Python-side integration.',
  ];

  protected openDialog(): void {
    this.isDialogOpen = true;
    document.body.style.overflow = 'hidden';
  }

  protected closeDialog(): void {
    this.isDialogOpen = false;
    document.body.style.overflow = '';
  }
}