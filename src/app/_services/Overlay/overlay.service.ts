import { ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DetailOverlayComponent } from "../../detail-overlay/detail-overlay.component";

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  constructor(
      private overlay: Overlay,
      private injector: Injector,
      private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  createOverlay(content: string) {
    const overlayRef = this.overlay.create(this.getOverlayConfig());
    const componentRef = overlayRef.attach(
        new ComponentPortal(DetailOverlayComponent, null, this.createInjector(content))
    );
  }
  private getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
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
