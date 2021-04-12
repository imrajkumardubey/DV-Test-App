import { Injectable, ReflectiveInjector } from '@angular/core';

@Injectable()
export class Helper {

  static isEmpty(value) {
    const bool = value == null ||
      (typeof value === 'string' && value.length === 0) ||
      (Helper.isArray(value) && value.length === 0);

    if (typeof value === 'object') {
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    }
    return bool;
  }


  static getErrorMessage(error) {
    if (Helper.hasValidationErrors(error)) {
      return error.json();
    }
    return Helper;
  }

  static getValidationErrorObj(error) {
    let errorObj: any;
    if (Object.keys(error).length !== 0 && error.constructor === Object) {
      errorObj = error;
    } else {
      errorObj = error.json();
    }
    const errorMessages = [];
    if (errorObj.hasOwnProperty('errors')) {
      const errorMessagesObj = errorObj.errors;
      for (const key in errorMessagesObj) {
        if (errorMessagesObj[key]) {
          errorMessages.push(errorMessagesObj[key]);
        }
      }
    }
    return (errorMessages.length > 0) ? errorMessages : ['Something went wrong, try again later!'];
  }

  static getErrorObject(error) {
    return error.json();
  }

  static hasValidationErrors(error): boolean {
    if (error.hasOwnProperty('status') || error.hasOwnProperty('code')) {
      return (error.hasOwnProperty('status')) ?
        ((error.status === 422) ? true : false) : ((error.code === 422) ? true : false);
    }
    return false;
  }

  static getQueryParamsString(paramsObj: any = {}): string {
    const parts = [];
    for (const i in paramsObj) {
      if (paramsObj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(paramsObj[i]));
      }
    }
    return '?' + parts.join('&');
  }

  static getTransformedErrorResponse(jsonResponse: any) {
    // In case of ErrorObservable
    if (jsonResponse.constructor.name === 'ErrorObservable' || jsonResponse.constructor.name === 'e') {
      jsonResponse = jsonResponse.error;
    }

    if (!jsonResponse) {
      return null;
    }

    if (Helper.hasValidationErrors(jsonResponse)) {
      return Helper.getValidationErrorObj(jsonResponse);
    } else if (typeof jsonResponse === 'object' && jsonResponse.hasOwnProperty('message')) {
      return [jsonResponse.message];
    } else if (typeof jsonResponse === 'string') {
      return [JSON.parse(jsonResponse).message];
    }
    return null;
  }

  static processErrorResponse(error: any, toastr: any) {
    const errorMessages = Helper.getTransformedErrorResponse(error);

    if (errorMessages && errorMessages.length > 0) {
      toastr.showError(errorMessages[0]);
    } else {
      toastr.showError();
    }
  }

  static getTransformedUrlPathFromActivatedRoute(route: any) {
    const pathroots = route.pathFromRoot;
    let pathUrlFromRoot = '';
    pathroots.forEach(path => {
      path.url.subscribe(url => {
        url.forEach(e => {
          pathUrlFromRoot += e + '/';
        });
      });
    });
    return pathUrlFromRoot;
  }

  static isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }

  static isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  static isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  static isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  static cloneObj(obj: any, extraData: any = {}) {
    return Object.assign(obj, extraData);
  }

  static convertRuppesTo(value: any, type: string = '') {
    let returnVal = null;

    switch (type) {
      case 'paise':
        returnVal = Math.ceil(parseFloat(value) * 100);
        break;
      case 'rupees':
        returnVal = Math.ceil(value / 100);
        break;
      default:
        returnVal = Math.ceil(value);
        break;
    }

    return returnVal;
  }

  static nl2br(str: string, isXhtml: boolean = false) {
    if (typeof str === 'undefined' || str === null) {
      return '';
    }
    // Adjust comment to avoid issue on locutus.io display
    const breakTag = (isXhtml || typeof isXhtml === 'undefined') ? '<br ' + '/>' : '<br>';
    return (str + '')
      .replace(/(\r\n|\n\r|\r|\n)/g, breakTag + '$1');
  }

}
