import {Component} from '@angular/core';

export interface Post {
    title: string
    text: string
    id?: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    posts: Post[] = [
        {title: 'Title 1', text: 'text1', id: 1},
        {title: 'Title 2', text: 'text2', id: 2}
    ]

    updatePosts(post: Post) {
        console.log('post', post)
        this.posts.unshift(post)
    }

    removePost(id: number): void {
        this.posts = this.posts.filter(p => p.id != id)
    }
}
