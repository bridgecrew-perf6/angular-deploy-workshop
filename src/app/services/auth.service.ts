import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Auth } from './../models/auth.model';
import { TokenService } from './../services/token.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/login`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(this.apiUrl, {email, password})
    .pipe(
      tap(response => this.tokenService.saveToken(response.accessToken))
    );
  }
}
