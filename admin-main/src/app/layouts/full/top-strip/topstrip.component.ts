


import {
    Component,
    Output,
    EventEmitter,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
    selector: 'app-topstrip',
    imports: [
        RouterModule,
        CommonModule,
        NgScrollbarModule,
        TablerIconsModule,
        MaterialModule,
        TablerIconsModule,
    ],

    templateUrl: './topstrip.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AppTopstripComponent {
    @Input() showToggle = true;
    @Input() toggleChecked = false;
    @Output() toggleMobileNav = new EventEmitter<void>();
}