import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ErrorService } from './error.service';

@Injectable()
export class GlobalErrorService {
 private errorService: ErrorService;
  constructor(private injector: Injector) {
    this.errorService = this.injector.get(ErrorService);
  }

  /**
   * @description - used to handle all the global errors.
   * @param error - The error object
   */
  handleError(error: Error | HttpErrorResponse) {
    this.errorService.normalizeError(error);
  }
}