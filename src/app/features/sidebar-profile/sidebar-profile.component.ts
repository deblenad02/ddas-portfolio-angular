import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-sidebar-profile',
  standalone: true,
  templateUrl: './sidebar-profile.component.html',
  styleUrl: './sidebar-profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarProfileComponent {
  protected readonly profile = PROFILE;
}