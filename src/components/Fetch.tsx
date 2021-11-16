import React, {Component} from 'react'
import Display from './Display'

type Locate ={
    latitude: number,
    longitude: number,
    city: string,
    weather: any,
    temperature: any,
};

class Weather extends Component <{},Locate>{
    constructor(props: any) {
        super(props)
        this.state ={
            latitude: 0,
            longitude: 0,
            city: "",
            weather: "",
            temperature: 0,
        } 
    }
    success = (pos:any) => {
        let crd = pos.coords;
        const lat: number = crd.latitude;
        const lon: number = crd.longitude;
        this.setState({
            latitude: lat,
            longitude: lon
        });
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=imperial&appid=a0d71e6c231ea88707788a141e394c4a`)
    .then(res => res.json())
    .then(json => {
        this.setState({
        temperature: json.main.temp,
        city: json.name,
        weather: json.weather[0].description,
    })
    });
}

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.success)
    }

    render(){
        return (
            <div>
                <Display temperature={this.state.temperature} city={this.state.city} weather={this.state.weather} />
            </div>
        )
    }
}

export default Weather;