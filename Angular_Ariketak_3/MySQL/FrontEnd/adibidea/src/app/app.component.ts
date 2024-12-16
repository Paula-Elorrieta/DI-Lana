import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LagunakService } from './services/lagunak.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MySql adibidea';
  items: any[] = [];
  laguna = { id: '', izena: '' };
  constructor(private lagunakService: LagunakService) { }


  ngOnInit(): void {
	this.loadItems();
  }


  selectItem(item: any) {
	this.laguna = item;
  }


  loadItems() {
	this.lagunakService.getItems().subscribe((data) => {
  	this.items = data;
	});
  }


  deleteItem(id: number) {
	this.lagunakService.deleteItem(id).subscribe(() => this.loadItems());
  }


  addItem() {
	const exists = this.items.some(aaa => aaa.id == this.laguna.id);
	if (!exists) {
  	this.lagunakService.addItem(this.laguna).subscribe(() => this.loadItems());
	}
	else {
  	this.laguna.izena = "id dagoeneko existitzen da";
	}
  }


  updateItem(item: any) {
	this.lagunakService.updateItem(this.laguna).subscribe(() => this.loadItems());
  }

}
