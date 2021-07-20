import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-basics';
    img = 'https://image.shutterstock.com/image-photo/image-260nw-1360920008.jpg'
    inputValue = ''

    constructor() {
        // setTimeout(() => {
        //     this.img = 'https://cdn.coursehunter.net/courses/360x220/angularjs-autentifikaciya-s-jwt.jpg'
        // }, 5000)
    }

    onInput(event?: any) {
        console.log("event", event)
        this.inputValue = event.target.value
    }

    onBlur(event?: any){
        this.inputValue = event.target.value
    }

}


