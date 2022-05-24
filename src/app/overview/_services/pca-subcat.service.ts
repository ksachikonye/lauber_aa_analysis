import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PcaSubcatService{

  constructor(private http: HttpClient) {
  }

  public async getPcaSubCut(): Promise<any[] | undefined> {
    return this.http.get<any[]>('/_server/pca_subcat.js').toPromise();
  }

}
