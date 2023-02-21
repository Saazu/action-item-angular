import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ActionItem, ActionItemState} from "./action-item";

@Component({
  selector: 'action-item',
  templateUrl: 'action-item.component.html',
  styleUrls: ['action-item.component.css']
})

export class ActionItemComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Output() saveActionHandler = new EventEmitter<ActionItem>();
  @Output() archiveActionHandler =new EventEmitter<string>();//(id: string) => void; new EventEmitter<string>()
  @Output() unArchiveActionHandler = new EventEmitter<string>();

  // @ts-ignore
  actionItemState: ActionItemState = this.title !== "" ? "saved" : "editing";
  // @ts-ignore
  previousValues: { title: string, description: string} = { title: this.title, description: this.description };
  isInputDisabled: boolean = this.actionItemState === "archived";

  get isButtonDisabled(): boolean {
    return this.title.trim() === "" || this.description.trim() === ""
  };

  saveActionItem(): void {
    this.actionItemState = "saved";
    const titleToSave = this.title.trim();
    const descriptionToSave = this.description.trim();
    this.saveActionHandler.emit({id: this.id, title: this.title, description: this.description});
  }

  cancel(): void {
    this.actionItemState = "saved";
    this.title = this.previousValues.title;
    this.description = this.previousValues.description;
  }

  archive(): void {
    this.actionItemState = "archived";
    this.archiveActionHandler.emit(this.id);
    this.isInputDisabled = true;
  }

  unarchive(): void {
    this.actionItemState = "saved";
    this.unArchiveActionHandler.emit(this.id);
    this.isInputDisabled = false;
  }

  handleInputFocus(): void {
    if (this.actionItemState !== "editing") {
      this.actionItemState = "editing";
      this.previousValues = { title: this.title, description: this.description };
    }
  }
}

