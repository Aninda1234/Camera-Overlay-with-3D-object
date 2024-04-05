import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>; // Update type to ElementRef<HTMLCanvasElement>
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private selectedObject!: THREE.Mesh;

  constructor() { }

  ngOnInit(): void {
    this.initThree();
    this.addDefaultObject(); // Add default object
    this.animate();
  }

  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 7;
  }

  private addDefaultObject(): void {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 0.5 });
    this.selectedObject = new THREE.Mesh(geometry, material);
    
    this.selectedObject.position.z = -1;
    this.selectedObject.position.x = -4;
    this.selectedObject.position.y = 4;
    
    this.scene.add(this.selectedObject);
  }

  private addSphere(): void {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000, opacity: 0.05 });
    this.selectedObject = new THREE.Mesh(geometry, material);
    
    this.selectedObject.position.z = -1;
    this.selectedObject.position.x = -4;
    this.selectedObject.position.y = 4;

    this.scene.add(this.selectedObject);
  }

  private addCylinder(): void {
    const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, opacity: 0.5 });
    this.selectedObject = new THREE.Mesh(geometry, material);
    
    this.selectedObject.position.z = -1;
    this.selectedObject.position.x = -4;
    this.selectedObject.position.y = 4;
    
    this.scene.add(this.selectedObject);
  }

  private addCone(): void {
    const geometry = new THREE.ConeGeometry(1, 2, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00, opacity: 0.5 });
    this.selectedObject = new THREE.Mesh(geometry, material);

    this.selectedObject.position.z = -1;
    this.selectedObject.position.x = -4;
    this.selectedObject.position.y = 4;

    this.scene.add(this.selectedObject);
  }

  private addCuboid(): void {
    const geometry = new THREE.BoxGeometry(1, 1, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0xff00ff, opacity: 0.5 });
    this.selectedObject = new THREE.Mesh(geometry, material);

    this.selectedObject.position.z = -1;
    this.selectedObject.position.x = -4;
    this.selectedObject.position.y = 4;
    
    this.scene.add(this.selectedObject);
  }

  onChangeObject(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.scene.remove(this.selectedObject);

    switch (selectedValue) {
      case 'cube':
        this.addDefaultObject();
        break;
      case 'sphere':
        this.addSphere();
        break;
      case 'cylinder':
        this.addCylinder();
        break;
      case 'cone':
        this.addCone();
        break;
      case 'cuboid':
        this.addCuboid();
        break;
      default:
        this.addDefaultObject();
    }
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    if (this.selectedObject) {
      this.selectedObject.rotation.x += 0.01;
      this.selectedObject.rotation.y += 0.01;
      this.renderer.render(this.scene, this.camera);
    }
  }
}
