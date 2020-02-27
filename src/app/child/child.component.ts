import { Component } from "@angular/core";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {
    showSecret = false;
    log = [];

    onToggleDetails() {
        this.showSecret = !this.showSecret;
        this.log.push(new Date());
    }
}