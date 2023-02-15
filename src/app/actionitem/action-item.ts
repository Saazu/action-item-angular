export type ActionItem = {
  id: string;
  title: string;
  description: string;
}

export type ActionItemState = "saved" | "editing" | "archived" | "unarchived";
