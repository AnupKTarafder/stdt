import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'STDT';
    constructor(public overlayContainer: OverlayContainer) {}
    @HostBinding('class') componentCssClass;

    onSetTheme(theme) {
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    }

}
