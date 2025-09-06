import {Component, inject, Input} from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PRODUCT_ROUTER_TOKENS } from '../product.routes';

@Component({
  standalone: true,
  imports: [
    NgFor,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Input() customize = false;
  readonly pieService = inject(PieService);
  pies$ = this.pieService.filteredPies$;
  readonly customizeLink = `./${PRODUCT_ROUTER_TOKENS.CUSTOMIZE}`;
  readonly detailLink = `./${PRODUCT_ROUTER_TOKENS.DETAILS}`;

  constructor() {}
}
