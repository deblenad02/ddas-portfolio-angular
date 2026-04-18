import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_ITEMS } from '../../core/data/portfolio.data';
import { NavItem } from '../../core/models/nav-item.model';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent implements OnInit {
  protected readonly navItems: readonly NavItem[] = NAV_ITEMS;
  protected activeSectionId: string = this.navItems[0]?.id ?? '';

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.updateActiveSection();
  }

  protected scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const offset = 110;
    const targetY = element.offsetTop - offset;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });

    this.activeSectionId = sectionId;
    this.cdr.markForCheck();
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateActiveSection();
  }

  @HostListener('window:resize')
  protected onWindowResize(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const scrollPosition = window.scrollY + 140;

    for (const item of this.navItems) {
      const section = document.getElementById(item.id);
      if (!section) {
        continue;
      }

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        if (this.activeSectionId !== item.id) {
          this.activeSectionId = item.id;
          this.cdr.markForCheck();
        }
        return;
      }
    }
  }
}