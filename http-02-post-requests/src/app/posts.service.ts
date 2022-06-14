import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        "https://angular-course-eadcb-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
        postData
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let httpParams = new HttpParams();
    httpParams = httpParams.append("print", "pretty");
    httpParams = httpParams.append("custom", "key");
    return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-course-eadcb-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
        {
          headers: new HttpHeaders({
            "Custom-Header": "Hello",
          }),
          params: httpParams,
        }
      )
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError((errorResponse) => {
          return throwError(errorResponse);
        })
      );
  }

  deletePosts() {
    return this.http.delete<{ [key: string]: Post }>(
      "https://angular-course-eadcb-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
    );
  }
}
