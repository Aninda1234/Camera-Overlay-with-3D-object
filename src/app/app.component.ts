import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CameraService } from './services/camera.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    @ViewChild('video', { static: true }) videoRef!: ElementRef;
  // video = this.videoRef.nativeElement;

  constructor(private cameraService: CameraService) { }

  async ngOnInit(): Promise<void> {
    try {
      const stream = await this.cameraService.getCameraStream();
      const video = this.videoRef.nativeElement;
      video.srcObject = stream;
      // this.video.srcObject = stream;
    } catch (error) {
      console.error('Error:', error);
    }
  }
} 

/// <!-- moving the above code to a separate component. not working  -->
// export class AppComponent {
//}

