import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wa-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {
  @Input()
  public icon = 'droplet';

  @Input()
  public propertyLabel = 'label';

  @Input()
  public propertyValue = 'value';
}
