import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RotatingCubeComponent } from './components/rotating-cube/rotating-cube.component';
import { CameraFeedComponent } from './components/camera-feed/camera-feed.component';
import { ObjectComponent } from './components/object/object.component';

@NgModule({
  declarations: [
    AppComponent,
    RotatingCubeComponent,
    CameraFeedComponent,
    ObjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
