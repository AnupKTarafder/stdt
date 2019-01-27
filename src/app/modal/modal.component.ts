import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { loadavg } from 'os';
import { NgForOf } from '@angular/common';

export interface Rec {
    name: string;
    cert: string;
    cgpa: number;
}
const record: Rec[] = [] ;

// @title Dialog Overview

@Component({
    selector: 'app-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnInit {
    constructor(public dialog: MatDialog) {}

    test() {
        if (localStorage.reg) {
            const reg = JSON.parse(localStorage.getItem('reg'));
            // Getting data from two array to one from localstorafe
            for (let index = 0; index < reg.length; index++) {
                const pat = JSON.parse(localStorage.getItem(reg[index]));
                const patQ = JSON.parse(localStorage.getItem(reg[index] + 'Q'));
                const data = {
                    name: pat.sal + ' ' + pat.fname + ' ' + pat.lname,
                    cert: patQ.cert1,
                    cgpa: patQ.cgpa1,
                };
                record.push(data);
            }
        }
    }

    ngOnInit() {
        this.test();
    }

    openDialog() {
        const dialogRef = this.dialog.open(Modal);
    }
}

@Component({
    selector: 'app-popup',
    templateUrl: 'dialog.html',
    styleUrls: ['modal.component.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class Modal implements OnInit {
    isLinear = true;
    hide2 = true;
    hide3 = true;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) {}

    certs = ['SSC', 'HSC', 'Bachelors'];

    add1() {
        this.hide2 = !this.hide2;
    }
    add2() {
        this.hide3 = !this.hide3;
    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            gender: ['', Validators.required],
            sal:    ['', Validators.required],
            email:  ['', Validators.required],
            phone:  ['', Validators.required],
            fname:  ['', Validators.required],
            lname:  ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            cert1: ['', Validators.required],
            cgpa1: ['', Validators.required],
            cert2: ['', Validators.required],
            cgpa2: ['', Validators.required],
            cert3: ['', Validators.required],
            cgpa3: ['', Validators.required],
        });
    }

    form() {
        const f1 = this.firstFormGroup.value;
        const f2 = this.secondFormGroup.value;
        localStorage.setItem(f1.fname, JSON.stringify(f1));
        localStorage.setItem(f1.fname + 'Q', JSON.stringify(f2));
        if (localStorage.reg) {
            const reg = JSON.parse(localStorage.getItem('reg'));
            reg.push(f1.fname);
            localStorage.setItem('reg', JSON.stringify(reg));
            const data = {
                name: f1.sal + ' ' + f1.fname + ' ' + f1.lname,
                cert: f2.cert1,
                cgpa: f2.cgpa1,
            };

            record.push(data);
        } else {
            const reg = [];
            reg.push(f1.fname);
            localStorage.setItem('reg', JSON.stringify(reg));            const data = {
                name: f1.sal + ' ' + f1.fname + ' ' + f1.lname,
                cert: f2.cert1,
                cgpa: f2.cgpa1,
            };
        }
    }
}
