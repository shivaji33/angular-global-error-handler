import { Injectable } from '@angular/core';

interface IServiceResponse {
  isSuccess: boolean;
  data?: any;
  error?: any;
}
@Injectable()
export class ErrorService {

  constructor() { }
    normalizeError(error) {
    try {
      if (error.serverErrors) {
        // tslint:disable-next-line:no-console
        console.log('------SERVER ERROR', error.serverErrors);
        // TODO based on API errors we have to show the toasters and do logout if it is 401
        return { isServerError: true };
      } else {
        // tslint:disable-next-line:no-console
        console.log('------CLIENT ERROR', error);
        // TODO these client errors should be sent to server over API.
        return { isServerError: false };
      }
    } catch (e) {}
  }

  /**
   * @description - used to send the failure service response
   * @param e - the error object.
   */
  sendErrorServiceResponse(e): IServiceResponse {
    this.normalizeError(e);
    return { isSuccess: false, error: e.serverErrors || [e] || [] } as IServiceResponse;
  }

}