import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { UIStore } from '@jc4f-nx/spotify-shared-data-access-store';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
  constructor(private uiStore: UIStore) {}

  intercept(
    req: HttpRequest<Record<string, string>>,
    next: HttpHandler
  ): Observable<HttpEvent<Record<string, string>>> {
    return next.handle(req).pipe(
      catchError((err: HttpResponse<Record<string, string>>) => {
        console.log(err);

        if (err.status === 401) {
          this.uiStore.showUnauthorizedModal();
        }
        return of(err);
      })
    );
  }
}

export const unauthorizedInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: UnauthorizedInterceptor,
  multi: true,
  deps: [UIStore],
};
