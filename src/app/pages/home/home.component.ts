import { Component, HostListener } from '@angular/core';
import { HeroSectionComponent } from "../../component/hero-section/hero-section.component";
import { HowItWorksComponent } from "../../component/how-it-works/how-it-works.component";
import { SmartPreviewComponent } from "../../component/smart-preview/smart-preview.component";
import { WhyTrolleymateComponent } from "../../component/why-trolleymate/why-trolleymate.component";
import { TrustedPartnersComponent } from "../../component/trusted-partners/trusted-partners.component";
import { SmartCheckoutBannerComponent } from "../../component/smart-checkout-banner/smart-checkout-banner.component";
import { ConnectUsComponent } from "../../component/connect-us/connect-us.component";
import { CtaStripComponent } from "../../component/cta-strip/cta-strip.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, HowItWorksComponent,
    SmartPreviewComponent, WhyTrolleymateComponent,
    TrustedPartnersComponent, SmartCheckoutBannerComponent,
    ConnectUsComponent, CtaStripComponent, FooterComponent,
    CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showScrollToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
