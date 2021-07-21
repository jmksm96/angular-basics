import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

    @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
    @ViewChild('titleInput') inputRef!: ElementRef
    @ViewChild('textInput') inputRefText!: ElementRef

    titile = ''
    text = ''

    constructor() {
    }

    ngOnInit() {
    }

    addPost() {
        if (this.titile.trim() && this.text.trim()) {
            const post: Post = {
                title: this.titile,
                text: this.text
            }
            this.onAdd.emit(post)
            console.log('new Post', post)
            this.text = this.titile = ''
        }
    }

    focusTitle() {
        this.inputRef.nativeElement.focus()
    }

    focusText() {
        this.inputRefText.nativeElement.focus()
    }
}