import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-smart-preview',
  imports: [
    CommonModule
  ],
  templateUrl: './smart-preview.component.html',
  styleUrl: './smart-preview.component.scss'
})
export class SmartPreviewComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }

  components = [
    { name: 'Raspberry Pi 3 B+', icon: 'fas fa-microchip', description: 'Acts as the central brain of the trolley.' },
    { name: 'RC522 RFID Reader', icon: 'fas fa-id-card', description: 'Scans and verifies product tags.' },
    { name: 'IR Sensors', icon: 'fas fa-wave-square', description: 'Detects proximity and motion.' },
    { name: 'Load Cell', icon: 'fas fa-weight-hanging', description: 'Validates product weight for fraud prevention.' },
    { name: 'Power Supply Unit', icon: 'fas fa-battery-three-quarters', description: 'Keeps the system powered on-the-go.' },
    { name: 'Billing Unit', icon: 'fas fa-file-invoice-dollar', description: 'Generates real-time e-bill for customers.' },
    { name: 'Ultrasonic Sensor', icon: 'fas fa-rss', description: 'For precise obstacle detection and human following.' },
    { name: 'Wi-Fi Module', icon: 'fas fa-wifi', description: 'For syncing with the server and dashboard.' },
    { name: 'AI Vision Camera (Optional)', icon: 'fas fa-eye', description: 'Advanced customer identification and tracking.' },
    { name: 'Navigation Wheels', icon: 'fas fa-robot', description: 'Motor-driven wheels controlled via Pi.' }
  ];

}
