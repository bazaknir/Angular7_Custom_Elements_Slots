import { NgModule, Injector } from '@angular/core';
import { BoardComponent } from './board/board.component'
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [BoardComponent],
  // we put BoardComponent in entryComponents so angular wont tell webpack to remove it during the bundling process.
  // this is extremely important in case we dont use the BoardComponent directly, but rather using the customElement 
  entryComponents: [BoardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardMoudle {
  constructor(private injector: Injector) {

    // create a customElement from the BoardComponent
    const boardCustomElement = createCustomElement(BoardComponent, {
      injector: this.injector
    });

    customElements.define('board-tile', boardCustomElement);
  }
}
