import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DetailOverlayComponent } from "../../detail-overlay/detail-overlay.component";
import { trigger, transition, style, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private overlayRef: any;
  constructor(
      private overlay: Overlay,
      private injector: Injector
  ) {}
  createOverlay(content: string) {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    const componentRef = this.overlayRef.attach(
        new ComponentPortal(DetailOverlayComponent,
        null,
        this.createInjector(content))
    );
  }
  closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
    }
  }
  private getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay.position().
        global().
        right().
        centerVertically(),
    });
  }
  private createInjector(content: string): Injector {
    const injectorTokens = new WeakMap<any, any>([
      [DetailOverlayComponent, { content }],
    ]);
    return Injector.create({
      parent: this.injector,
      providers: [{ provide: 'content', useValue: content }],
      name: 'OverlayComponentInjector',
    });
  }
}
