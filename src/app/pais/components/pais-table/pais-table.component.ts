import { Component, OnInit, Input } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { Country, CapitalInfo } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})


export class PaisTableComponent  {
  public configuration!: Config;
  public columns!: Columns[];

  @Input() paises: Country[] =  [];

  
  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
    // ... etc.
    this.columns = [
      { key: 'cca2', title: 'codigo' },
      { key: 'capital[0]' , title: 'capital' },
      { key: 'population', title: 'population' },
      { key: 'name.common', title: 'Name' },
    ];
  }
}