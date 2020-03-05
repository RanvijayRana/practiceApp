import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
    exportAs: 'appDropdown'
})
export class DropdownDirective {

    @HostBinding('class.show') isShow = true;

    @HostListener('click') toggleOpen() {
        this.isShow = !this.isShow;
    }
}