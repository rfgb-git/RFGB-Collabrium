import { NgStyle } from '@angular/common';
import { ChartData } from 'chart.js';
import { Component, DestroyRef, DOCUMENT, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import {
  AvatarComponent,
  ButtonCloseDirective,
  PageItemComponent,  PaginationComponent,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GutterDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,  ButtonDirective,BadgeComponent,
} from '@coreui/angular';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { IconDirective } from '@coreui/icons-angular';



interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-po',
  imports: [  CardComponent, CardBodyComponent, RowComponent, ColComponent, IconDirective, ReactiveFormsModule, CardHeaderComponent, RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, PageItemComponent,PaginationComponent, BadgeComponent,  ],
  templateUrl: './po.component.html',
  styleUrl: './po.component.scss'
})
export class PoComponent {

}
