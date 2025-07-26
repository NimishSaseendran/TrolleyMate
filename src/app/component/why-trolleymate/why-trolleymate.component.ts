import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-why-trolleymate',
  imports: [
    CommonModule
  ],
  templateUrl: './why-trolleymate.component.html',
  styleUrl: './why-trolleymate.component.scss'
})
export class WhyTrolleymateComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({ duration: 800 });
  }

  benefits = [
    {
      icon: '🤖',
      title: 'AI Human-Following Trolley',
      desc: 'The trolley detects and follows you using smart AI vision — no pushing required.'
    },
    {
      icon: '📡',
      title: 'RFID-Based Auto Detection',
      desc: 'Instantly detects added items without scanning, using embedded RFID sensors.'
    },
    {
      icon: '💸',
      title: 'Live Billing System',
      desc: 'Track your total bill live while shopping with real-time updates.'
    },
    {
      icon: '🚀',
      title: 'Frictionless Checkout',
      desc: 'Complete payments directly from the trolley — skip the queue.'
    },
    {
      icon: '⚖️',
      title: 'Load Cell Verification',
      desc: 'Validates the weight of each item added, ensuring accurate billing.'
    },
    {
      icon: '🛡️',
      title: 'Anti-Theft & Interference Control',
      desc: 'Prevents scanning conflicts or theft using smart interference detection.'
    },
    {
      icon: '🌐',
      title: 'IR & Smart Sensors',
      desc: 'IR and ultrasonic sensors ensure safe, aware movement throughout the store.'
    },
    {
      icon: '♻️',
      title: 'Eco-Friendly & Efficient',
      desc: 'Saves time, reduces effort, and promotes sustainability with digital receipts.'
    },
  ];

}
