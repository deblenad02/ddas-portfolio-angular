import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioLayoutComponent } from './features/portfolio-layout/portfolio-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}