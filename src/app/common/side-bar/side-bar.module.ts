import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
      SideBarComponent
    ],
    declarations: [
      SideBarComponent
    ],
    providers: [],
})
export class SideBarModule { }
