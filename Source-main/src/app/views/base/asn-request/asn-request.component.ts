import { NgStyle } from '@angular/common';
import { ChartData } from 'chart.js';
import { Component, DestroyRef, DOCUMENT, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import {
  AvatarComponent,
  ButtonDirective,
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
  TableDirective,
  
  
  FormCheckComponent,
  FormCheckInputDirective,
   
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormSelectDirective, InputGroupComponent,  
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
  selector: 'app-asn-request',
  standalone: true,
  imports: [InputGroupComponent, ReactiveFormsModule, FormsModule, FormDirective, ColComponent, FormLabelDirective, FormControlDirective, FormSelectDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective, CardComponent, CardBodyComponent, RowComponent, ColComponent, ButtonDirective, IconDirective, ReactiveFormsModule, FormsModule, CardHeaderComponent, RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent],
  templateUrl: './asn-request.component.html',
  styleUrl: './asn-request.component.scss'
})
export class AsnRequestComponent {

}
