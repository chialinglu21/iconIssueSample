import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  standalone: true,
  selector: "storybook-icon",
  imports: [CommonModule, MatIconModule],
  template: `<mat-icon svgIcon="icon:search"></mat-icon>`,
})
export default class IconComponent {}
