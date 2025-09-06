import { Component, inject } from '@angular/core';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {CartService} from '../../services/cart.service';

@Component({
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatButtonModule,
  ],
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  readonly cartService = inject(CartService)
  selectedPie = this.cartService.selectedItemPlusQuantity;
}
