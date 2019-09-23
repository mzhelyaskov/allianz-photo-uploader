import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

const URL = 'http://localhost:3000/upload-photo/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart: false
  });
}
