import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PCAScaleService {

  constructor(private http: HttpClient) {
  }

  public async getPCAscale(): Promise<any[] | undefined> {
    return this.http.get<any[]>('/_server/pca_scale.js').toPromise();
  }

}
