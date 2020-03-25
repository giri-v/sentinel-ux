import { Component, VERSION } from '@angular/core';
import buildInfo from './../../package.json';
import xml2js from 'xml2js'; 
import { StatsService } from './stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  version = VERSION.full;
  appversion: string = buildInfo.version;

  streams: Array<any>;

  rtmpStats: Object;

  ngclass = 'mat-video-responsive';
  gridVidClass = 'mid-size';

  src = 'http://camdrive:20080/cams/Entrycam/index.mpd';
  title = 'Entrycam';

  currentTime = 0;
  autoplay = true;
  preload = true;

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
       });

    });
    
  }

  getUrlFromName(name) {
    return 'http://camdrive:20080/cams/' + name + '/';
  }
}
