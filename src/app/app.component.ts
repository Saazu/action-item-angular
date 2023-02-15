import { Component } from '@angular/core';
import {ActionItem} from "./actionitem/action-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items = ['2','3',]
  saveActionItem(actionItem: ActionItem) {
    console.log("Saving:", actionItem)
  }

  archiveActionItem(id: string) {
    console.log("Archive:", id);
  }

  unarchiveActionItem(id: string) {
    console.log("Unarchive:", id)
  }
}
