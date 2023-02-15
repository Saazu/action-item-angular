import {Component, Input} from "@angular/core";
import { ActionItemState} from "./action-item";

@Component({
  selector: 'action-item',
  templateUrl: 'action-item.component.html',
  styleUrls: ['action-item.component.css']
})

export class ActionItemComponent {
  @Input() id: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() saveActionHandler: Function = (id: string, titleToSave: string, descriptionToSave: string): void => {};
  @Input() archiveActionHandler: Function = (id: string): void => {};
  @Input() unArchiveActionHandler: Function = (id: string): void => {};

  actionItemState: ActionItemState = this.title !== "" ? "saved" : "editing";
  previousValues: { title: string, description: string} = { title: this.title, description: this.description };
  isInputDisabled: boolean = this.actionItemState === "archived";

  isButtonDisabled(): boolean {
    return this.title.trim() === "" || this.description.trim() === ""
  };

  saveActionItem(): void {
    this.actionItemState = "saved";
    const titleToSave = this.title.trim();
    const descriptionToSave = this.description.trim();
    this.saveActionHandler({ id: this.id, title: titleToSave, description: descriptionToSave });
  }

  cancel(): void {
    this.actionItemState = "saved";
    this.title = this.previousValues.title;
    this.description = this.previousValues.description;
  }

  archive(): void {
    this.actionItemState = "archived";
    this.archiveActionHandler(this.id);
    this.isInputDisabled = true;
  }

  unarchive(): void {
    this.actionItemState = "saved";
    this.unArchiveActionHandler(this.id);
    this.isInputDisabled = false;
  }

  handleInputFocus(): void {
    if (this.actionItemState !== "editing") {
      console.log("Focused");
      this.actionItemState = "editing";
      this.previousValues = { title: this.title, description: this.description };
    }
  }
  handleTitleChange(event: InputEvent) {
    this.title = (event.target as HTMLInputElement).value
  }

  handleDescriptionChange(event: InputEvent) {
    this.description = (event.target as HTMLInputElement).value
  }
}

