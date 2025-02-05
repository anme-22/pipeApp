import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css',
})
export class BasicPageComponent {
  public nameLower: string = 'angel';
  public nameUpper: string = 'ANGEL';
  public fullName: string = 'aNGeL mEnDEz';

  public customDate: Date = new Date();
}
