import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // arr = [1, 3, 5, 7, 9, 11]

    obj = [
        {title: 'post1', author: 'some guy', comments: [
                {name: 'Max', text: 'text1'},
                {name: 'Max', text: 'text1'},
                {name: 'Max', text: 'text1'}
            ]},
        {title: 'post2', author: 'some guy2', comments: [
                {name: 'Max2', text: 'text2'},
                {name: 'Max2', text: 'text2'},
                {name: 'Max2', text: 'text2'}
            ]}
    ]
}


