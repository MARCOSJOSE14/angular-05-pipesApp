import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html'
})
export class BasicsPageComponent {

  public nameLower: string = 'MARCOS';
  public nameUpper: string = 'marcos';
  public fullName: string = 'MarcOs rAMoS';

  public customDate: Date = new Date();

}
