import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  name = "City";
  general = {name: "Default",imagePath: "../../../assets/images/city.webp", icon: "wi-day-sunny"};
  main= {
    "temp": 289.92,
    "pressure": 1009,
    "humidity": 92,
    "temp_min": 7,
    "temp_max": 20
  };
  description= "description";
  sys={
    "country": "JP",
    "sunrise": 1560281377,
    "sunset": 1560333478
  };
  wind={
    "speed": 0.47,
    "deg": 107.538
  }
  category = {
    Clear:{name: "Clear", imagePath: "../../../assets/images/Clear.jpg", icon: "wi-day-sunny"},
    Clouds:{name: "Clouds", imagePath: "../../../assets/images/Clouds.jpg", icon: "wi-day-cloudy"},
    Snow:{name: "Snow", imagePath: "../../../assets/images/Snow.jpg", icon: "wi-day-snow"},
    Rain:{name: "Rain", imagePath: "../../../assets/images/Rain.jpg", icon: "wi-day-rain"},
    Drizzle:{name: "Drizzle", imagePath: "../../../assets/images/Drizzle.jpg", icon: "wi-fog"},
    Thunderstorm:{name: "Thunderstorm", imagePath: "../../../assets/images/Thunderstorm.jpg", icon: "wi-thunderstorm"},
  }
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
getCity(city){
  this.weatherService.getWeatherDataByCityName(city).subscribe(data=> {
    this.name = (data as any).name;
    this.main = (data as any).main;
    this.sys = (data as any).sys;
    this.wind = (data as any).wind;
    this.description = (data as any).weather[0].description;
    switch((data as any) .weather[0].main) {
      case 'Clear':
         this.general= this.category.Clear
        break;
      case 'Clouds':
        this.general= this.category.Clouds
        break;
      case 'Snow':
        this.general= this.category.Snow
        break;
      case 'Rain':
        this.general= this.category.Rain
        break;
      case 'Drizzle':
        this.general= this.category.Drizzle
        break;
      case 'Thunderstorm':
        this.general= this.category.Thunderstorm
        break;
      default:
        this.general = {name: "Default",imagePath: "../../../assets/images/city.webp", icon: "wi-day-sunny"}
    }
  },
  (err) => {
    this.name = "Not Found"
    this.general = {name: "Default",imagePath: "../../../assets/images/city.webp", icon: "wi-day-sunny"}
  })
}



}
