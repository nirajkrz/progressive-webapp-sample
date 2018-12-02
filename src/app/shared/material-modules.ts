import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatExpansionModule
} from "@angular/material";

const modulesAngularMaterial = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule,
  MatExpansionModule
];
@NgModule({
  imports: modulesAngularMaterial,
  exports: modulesAngularMaterial
})
export class AppAngularMaterialModule {}
