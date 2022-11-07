import { Component, OnInit } from '@angular/core';
import { AuthenticationService, CredentialsService } from '@app/auth';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  constructor(private _credentials: CredentialsService) {}

  ngOnInit(): void {}

  get username(): string | null {
    const credentials = this._credentials.credentials;
    return credentials ? credentials.username : null;
  }
}
