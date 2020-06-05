import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private http:HttpClient) { }
private url="/details"

  public doRegistration(student)
  {
    return this.http.post(this.url,student);
  }

  public getDetails()
  {

    console.log(this.http.get(this.url));
    return this.http.get(this.url);
    
  }

  public getDetailById(id)
  {
    return this.http.get("/details/"+id);
  }
  public deleteDetails(id)
  {
    return this.http.delete("/details/"+id);
  }

  public updateDetail(id:any, value:any)
  {
    return this.http.put("/details/"+id, value);
  }
  


}
