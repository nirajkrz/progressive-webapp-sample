import { Response } from "@angular/http";
import {
  Observable,
  throwError as observableThrowError,
  observable
} from "rxjs";
import { catchError, map } from "rxjs/operators";

export class HttpUtil {
  static catchError = (observable: Observable<any>): Observable<never> => {
    return <Observable<never>>observable.pipe(
      catchError((error: any) => {
        return observableThrowError(error || "Server error");
      })
    );
  };

  static mapResponseClient = <T>(
    observable: Observable<any>
  ): Observable<T> => {
    return <Observable<T>>observable.pipe(
      map((response: any) => {
        if (response.status === 200) {
          return <T>response;
        } else {
          throw response;
        }
      })
    );
  };

  static mapAndCatchClient = <T>(observable: Observable<Response>) => {
    return <Observable<T>>observable.pipe(
      HttpUtil.mapResponseClient,
      HttpUtil.catchError
    );
  };
}
