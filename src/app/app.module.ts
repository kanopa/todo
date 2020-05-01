import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FilterPipe } from './filter/filter.pipe';
import { HoverDirective } from './hover/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    FilterPipe,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  exports: [
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
