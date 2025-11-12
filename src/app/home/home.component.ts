import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ServiceService]
})
export class HomeComponent {
data: any;
  quote:String = "";
  author:String="";

  constructor(private sobj: ServiceService) {
    this.loadQuote();
  }

  async loadQuote() {
    this.data = await this.sobj.api();
    this.quote=this.data.quote;
    this.author=this.data.author;
  }
}
