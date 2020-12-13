import { Component, VERSION } from '@angular/core';


import buildInfo from './../../package.json';
import xml2js from 'xml2js';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
    this.statsService.getStats().subscribe(data => {
      console.log(data);

      var parser = new xml2js.Parser(
        {
          trim: true,
          explicitArray: true
        });
      parser.parseString(data.body, (err, result) => {
        this.rtmpStats = result;
        this.streams = result.rtmp.server[0].application[0].live[0].stream;
        this.mainStream = this.streams[0];
      });

    });

  }

  updateMainStream(stream) {
    this.mainStream = stream;
  }

  getUrlFromName(name) {
    return 'http://camdrive:80/' + name + '/';
  }

  getHlsFromName(name) {
    return 'http://camdrive:20080/hls/' + name + '/';
  }
}
