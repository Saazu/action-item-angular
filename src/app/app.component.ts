import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saveActionItem(id: string, titleToSave: string, descriptionToSave: string) {
    console.log("Saving:", id, titleToSave, descriptionToSave)
  }

  archiveActionItem(id: string) {
    console.log("Archive:", id);
  }

  unarchiveActionItem(id: string) {
    console.log("Unarchive:", id)
  }
}
