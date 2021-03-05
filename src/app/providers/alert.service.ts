import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AlertComponent } from '../shared/components/alert/alert.component';

export interface AlertDialogData {
    title: string;
    message: string;
}

@Injectable({
    providedIn: 'root',
})
export class AlertService {

    constructor(
        private dialog: MatDialog
    ) { }

    openAlert(title: string, message: string): void {
        this.dialog.open(AlertComponent, {
            minWidth: '250px',
            data: {
                title,
                message
            } as AlertDialogData
        });
    }
}
