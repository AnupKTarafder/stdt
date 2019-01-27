import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Components
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { LayoutModule } from '@angular/cdk/layout';

import {
    MatAutocompleteModule, MatBadgeModule,
    MatBottomSheetModule, MatButtonModule,
    MatButtonToggleModule, MatCardModule,
    MatCheckboxModule, MatChipsModule,
    MatDatepickerModule, MatDialogModule,
    MatDividerModule, MatExpansionModule,
    MatGridListModule, MatIconModule,
    MatInputModule, MatProgressBarModule,
    MatMenuModule, MatNativeDateModule,
    MatPaginatorModule, MatListModule,
    MatProgressSpinnerModule, MatRadioModule,
    MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule,
    MatSortModule, MatStepperModule,
    MatTableModule, MatTabsModule,
    MatToolbarModule, MatTooltipModule,
    MatTreeModule, MatFormFieldModule,
} from '@angular/material';


@NgModule({
    imports: [
        MatAutocompleteModule, MatBadgeModule,
        MatBottomSheetModule, MatButtonModule,
        MatButtonToggleModule, MatCardModule,
        MatCheckboxModule, MatChipsModule,
        MatDatepickerModule, MatDialogModule,
        MatDividerModule, MatExpansionModule,
        MatGridListModule, MatIconModule,
        MatInputModule, MatProgressBarModule,
        MatMenuModule, MatNativeDateModule,
        MatPaginatorModule, MatListModule,
        MatProgressSpinnerModule, MatRadioModule,
        MatRippleModule, MatSelectModule,
        MatSidenavModule, MatSliderModule,
        MatSlideToggleModule, MatSnackBarModule,
        MatSortModule, MatStepperModule,
        MatTableModule, MatTabsModule,
        MatToolbarModule, MatTooltipModule,
        MatTreeModule, MatFormFieldModule,
        FormsModule, ReactiveFormsModule,
        LayoutModule, BrowserAnimationsModule,
    ],

    exports: [
        MatAutocompleteModule, MatBadgeModule,
        MatBottomSheetModule, MatButtonModule,
        MatButtonToggleModule, MatCardModule,
        MatCheckboxModule, MatChipsModule,
        MatDatepickerModule, MatDialogModule,
        MatDividerModule, MatExpansionModule,
        MatGridListModule, MatIconModule,
        MatInputModule, MatProgressBarModule,
        MatMenuModule, MatNativeDateModule,
        MatPaginatorModule, MatListModule,
        MatProgressSpinnerModule, MatRadioModule,
        MatRippleModule, MatSelectModule,
        MatSidenavModule, MatSliderModule,
        MatSlideToggleModule, MatSnackBarModule,
        MatSortModule, MatStepperModule,
        MatTableModule, MatTabsModule,
        MatToolbarModule, MatTooltipModule,
        MatTreeModule, MatFormFieldModule,
        FormsModule, ReactiveFormsModule,
        LayoutModule, BrowserAnimationsModule,
    ],
    providers: [],
})
export class MaterialModule { }
