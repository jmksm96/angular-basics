import {Component} from '@angular/core'

export interface Post {
    title: string
    text: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    search = ''
    searchField = 'title'

    addPost(): void {
        this.posts.push({
            title: 'New title',
            text: 'new text'
        })
    }

    posts: Post [] = [
        {title: 'Angular', text: 'The best framework'},
        {title: 'React', text: 'Bullsheet'},
        {title: 'Vue', text: 'NoName'},
    ]
}
