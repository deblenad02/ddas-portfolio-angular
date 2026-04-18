import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ProjectItem = {
  title: string;
  period: string;
  shortSummary: string;
  description: string;
  stack: readonly string[];
  githubUrl?: string;
  category: string;
};

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  protected readonly projects: readonly ProjectItem[] = [
    {
      title: 'TicTacToe AI Streamlit App',
      period: '06/2025',
      category: 'AI / Web App',
      shortSummary: 'Interactive browser-based game experience built from a notebook prototype into a cleaner web app.',
      description:
        'Developed an interactive TicTacToe application beginning with a Jupyter Notebook prototype using ipywidgets, then recreated it in Streamlit as a browser-based web app with a more user-friendly interface.',
      stack: ['Python', 'Streamlit', 'AI', 'Jupyter'],
      githubUrl: 'https://github.com/deblenad02/TicTacToe',
    },
    {
      title: 'Study Pulse Android App',
      period: '04/2025',
      category: 'Mobile App',
      shortSummary: 'Android quiz and habit assessment application with a clean and interactive UI.',
      description:
        'Built Study Pulse as an Android application using Kotlin and Java, featuring personalized quiz and habit assessment flows with XML-based interface design.',
      stack: ['Kotlin', 'Java', 'Android', 'XML'],
      githubUrl: 'https://github.com/deblenad02/StudyPulseMobileApp',
    },
    {
      title: 'Car Insurance Claim Prediction',
      period: '04/2025',
      category: 'Machine Learning',
      shortSummary: 'Classification-based ML project focused on insurance claim prediction.',
      description:
        'Used classification models to train and test a dataset in order to predict whether an insurance claim would be made, strengthening my understanding of data preprocessing, training, and evaluation.',
      stack: ['Python', 'Machine Learning', 'Classification'],
    },
    {
      title: 'Web Development using J2EE',
      period: '03/2025',
      category: 'Full-Stack Web',
      shortSummary: 'Website development using JSP, Servlets, JDBC, MySQL, and Apache Tomcat.',
      description:
        'Designed and developed a web application using JSP and Servlets, connected it to a MySQL database through JDBC, and ran it on Apache Tomcat Server.',
      stack: ['J2EE', 'JSP', 'Servlets', 'MySQL', 'JDBC', 'Tomcat'],
    },
    {
      title: 'Potato Leaf Disease Detection',
      period: '03/2024',
      category: 'Deep Learning',
      shortSummary: 'CNN-based deep learning project for plant disease prediction.',
      description:
        'Built a deep learning approach using CNNs to identify potato leaf diseases from image-based input, with a focus on practical disease prediction.',
      stack: ['Python', 'Deep Learning', 'CNN'],
    },
  ];

  protected selectedProject: ProjectItem | null = null;

  protected openProject(project: ProjectItem): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  protected closeDialog(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}