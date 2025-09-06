import { Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { NgIf, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { ReplaySubject, takeUntil } from 'rxjs';
import {ContactService} from '../../services/contact.service';
import {ContactForm} from '../../models/contact-form';

@Component({
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  selector: 'app-customize-view',
  templateUrl: './customize-view.component.html',
  styleUrls: ['./customize-view.component.css']
})
export class CustomizeViewComponent {
  constructor(){}
  readonly pieService = inject(PieService);
  selectedPie$ = this.pieService.selectedPie$;
  readonly contactService = inject(ContactService);
  destroyed$ = new ReplaySubject<void>(1);

  model: ContactForm = {
    phone: '',
    comment: '',
  };
  submitted = false;
  loading = false;

  submitForm(model: ContactForm) {
    this.submitted = true;
    this.loading = true;

    this.contactService.submitContactForm(model).pipe(
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.loading = false;
    })
  }

  clearForm() {
    this.submitted = false;
    this.model = {
      phone: '',
      comment: '',
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
