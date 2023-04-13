import { HttpClientModule } from "@angular/common/http";
import { NgModule, inject } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
})
export class IconRegistryModule {
  matIconRegistry = inject(MatIconRegistry);
  domSanitizer = inject(DomSanitizer);
  constructor() {
    this.matIconRegistry.addSvgIconSetInNamespace(
      "icon",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons-sprite.svg"
      )
    );
  }
}
