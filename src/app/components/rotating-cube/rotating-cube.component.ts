import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-rotating-cube',
  templateUrl: './rotating-cube.component.html',
  styleUrls: ['./rotating-cube.component.css']
})
export class RotatingCubeComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private cube!: THREE.Mesh;

  constructor() { }

  ngOnInit(): void {
    this.initThree();
    this.addCube();
    this.animate();
  }

  private initThree(): void {
    const canvas = this.canvasRef.nativeElement;
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true }); // Set alpha to true to make background transparent
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  
    this.scene = new THREE.Scene();
  
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 7;
  }

  private addCube(): void {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, opacity: 0.5 }); // Adjust opacity as needed
    this.cube = new THREE.Mesh(geometry, material);
    // Position the cube slightly in front of the camera
    this.cube.position.z = -1; // Adjust this value as needed to focus the cube
    this.cube.position.x = -4;
    this.cube.position.y = 3;
    this.scene.add(this.cube);
  }  

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
