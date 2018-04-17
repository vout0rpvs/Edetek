import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule, MatInputModule, MatListModule, MatToolbarModule, MatIconModule } from '@angular/material';
@NgModule({
    imports : [
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule
    ],
})

export class MaterialModule { }
