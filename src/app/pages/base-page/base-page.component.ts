import { Component, OnInit } from '@angular/core';
import { UnsubscribeDestroy } from 'src/app/core/destroyManage/unsubscribe-destroy';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent extends UnsubscribeDestroy {

  constructor() {super() }

}
