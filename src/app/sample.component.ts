import { Component, VERSION } from '@angular/core';
import buildInfo from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  version = VERSION.full;
  appversion: string = buildInfo.version;

  ngclass = 'mat-video-responsive';

  src = 'http://camdrive:20080/cams/Entrycam/index.mpd';
  title = 'Entrycam';
  width = 600;
  height = 337.5;
  currentTime = 0;
  autoplay = true;
  preload = true;
  loop = false;
  quality = true;
  download = false;
  fullscreen = false;
  showFrameByFrame = false;
  keyboard = true;
  color = 'primary';
  spinner = 'spin';
  poster = 'assets/NASA.jpg';
  overlay = null;
  muted = false;
}
