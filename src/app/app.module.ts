import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ModalComponent, Modal } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { OverlayContainer, OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        ModalComponent,
        Modal,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        OverlayModule,
    ],
    entryComponents: [
        Modal,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
