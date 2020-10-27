import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { Config } from '../config';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css']
})
export class TestButtonComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }

  showConfig() {
    this.configService.getConfig().subscribe()
    this.configService.setConfig().subscribe();
  }

}
