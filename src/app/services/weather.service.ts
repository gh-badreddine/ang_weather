import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '1d70aa93ca213263fa857db3c6caeb44';
  constructor(private http: HttpClient) { }

  getWeatherDataByCityName(city: string){
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', this.apiKey)
  
    return this.http.get(this.url, {params});
  }

}

