import {Component, OnInit, Input, EventEmitter} from "@angular/core";

@Component({
  selector: 'action-item',
  templateUrl: 'actionitem.component.html',
  styleUrls: ['actionitem.component.css']
})

export class ActionItem {
  @Input() id: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() saveActionHandler: Function = (id: string, titleToSave: string, descriptionToSave: string): void => {};
  @Input() archiveActionHandler: Function = (id: string): void => {};
  @Input() unArchiveActionHandler: Function = (id: string): void => {};

  actionItemState: string = this.title !== "" ? "saved" : "editing";
  previousValues = { title: this.title, description: this.description };
  isDisabled = this.actionItemState === "archived"

  saveActionItem() {
    this.actionItemState = "saved";
    const titleToSave = this.title.trim();
    const descriptionToSave = this.description.trim();
    this.title = titleToSave;
    this.description = descriptionToSave;
    this.saveActionHandler(this.id, titleToSave, descriptionToSave);
    console.log('Saved');
  }

  cancel() {
    this.actionItemState = "saved";
    // titleInputRef.current.blur();
    // descriptionInputRef.current.blur();
    this.title = this.previousValues.title;
    this.description = this.previousValues.description;
    console.log('Cancelled');
  }

  archive() {
    this.actionItemState = "archived";
    this.archiveActionHandler(this.id);
    this.isDisabled = true;
    console.log('Archived');
  }

  unarchive() {
    this.actionItemState = "saved";
    this.unArchiveActionHandler(this.id);
    this.isDisabled = false;
    console.log('Unarchived');
  }

  handleInputFocus() {
    if (this.actionItemState !== "editing") {
      console.log("Focused");
      this.actionItemState = "editing";
      this.previousValues = { title: this.title, description: this.description };
    }
  }

  handleTitleChange(event: Event) {
    // setTitleValue(event.currentTarget.value);
  }

  handleDescriptionChange(event: Event) {
    // setDescriptionValue(event.currentTarget.value);
  }
}

