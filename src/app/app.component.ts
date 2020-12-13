import {
  Component,
  ElementRef,
  ViewChild,
  VERSION
} from '@angular/core';
import { MatVideoComponent} from './video/video.component'

import buildInfo from './../../package.json';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('vid', { static: true }) private player: MatVideoComponent;

  version = VERSION.full;
  appversion: string = buildInfo.version;

  streams: Array<any>;

  rtmpStats: Object;
  mainStream: any;

  ngclass = 'mat-video-responsive';
  gridVidClass = 'mid-size';

  src = 'http://camdrive:80/Entrycam/index.mpd';
  title = 'Entrycam';

  currentTime = 0;
  autoplay = true;
  preload = 'auto';

  keyboard = true;
  color = 'primary';

  overlay = null;
  muted = true;



  constructor(private statsService: StatsService) {
    console.log('app component constructor called');
  }

  ngOnInit() {
    //load articles
    this.statsService.getStats();
    this.streams = ["Entrycam", "Frontcam"];
    this.mainStream = "Entrycam";
    

  }

  updateMainStream(stream) {
    this.mainStream = stream;
  }

  getUrlFromName(name) {
    return 'http://camdrive:80/' + name + '/index.mpd';

  }

}
