import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-how-it-works',
  imports: [
    CommonModule,
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }

  steps = [
    {
      title: 'Human Detection & Auto-Follow',
      description: 'TrolleyMate automatically detects your presence and follows you throughout the store without manual control.',
      icon: 'images/icon/human-detection.png'
    },
    {
      title: 'Smart Obstacle Avoidance',
      description: 'Equipped with IR sensors and vision detection to smoothly avoid obstacles and navigate crowded spaces.',
      icon: 'images/icon/obstacles.png'
    },
    {
      title: 'Scan Your RFID Card',
      description: 'Simply scan your RFID-enabled customer card to activate your trolley session and start shopping.',
      icon: 'images/icon/rfid-scan.png'
    },
    {
      title: 'Add Products to Smart Trolley',
      description: 'Every product you drop into the trolley is detected via RFID for instant identification and billing.',
      icon: 'images/icon/add-product.png'
    },
    {
      title: 'Real-Time Billing',
      description: 'As you shop, your items are billed in real time — see a live cart summary on the display or mobile app.',
      icon: 'fas fa-file-invoice-dollar'
    },
    {
      title: 'Item Removal Alerts',
      description: 'If any item is removed after being billed, the system triggers an alert and automatically adjusts the bill.',
      icon: 'fas fa-exclamation-triangle'
    },
    {
      title: 'Smart Checkout & Payment',
      description: 'No more waiting in queues — pay instantly through the integrated e-bill system using UPI or card.',
      icon: 'fas fa-credit-card'
    },
    {
      title: 'Exit Gate Unlocks Automatically',
      description: 'Once payment is verified, the exit gate opens automatically, completing a secure and seamless shopping experience.',
      icon: 'fas fa-door-open'
    }
  ];

}
