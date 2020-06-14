import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable,of } from 'rxjs';
import { delay,map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Feedback } from '../shared/feedback';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private processhttpmsg: ProcessHTTPMsgService) { }

  sendFeedback(feed: Feedback) : Observable<Feedback>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback/', feed, httpOptions)
    .pipe(catchError(this.processhttpmsg.handleError));

  }
}
