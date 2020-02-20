import { Pipe, PipeTransform } from '@angular/core';
import { FilterableListItem } from '../model/FilterableListItem';
import { ListItemIndented } from '../model/ListItemIndented';

@Pipe({name: 'ordered'})
export class OrderPipe implements PipeTransform {
  transform(items: Array<FilterableListItem>): Array<ListItemIndented> {
    let orderedItems: Array<ListItemIndented> = [];
    const itemsCopy = [...items];

    while(itemsCopy.length > 0) {
      const item = itemsCopy.shift();

      if (this.isRoot(item.parent_id, items)) {
        const itemIndented: ListItemIndented = {...item, indent: 0};
        orderedItems.push(itemIndented);
      } else {
        const itemsParent: ListItemIndented = orderedItems.find(parent => parent.id === item.parent_id);
        if (itemsParent !== undefined) {
          const itemIndented: ListItemIndented = {...item, indent: itemsParent.indent + 1};
          const parentIndex = orderedItems.indexOf(itemsParent);
          orderedItems.splice(parentIndex + 1, 0, itemIndented);
        } else {
          itemsCopy.push(item);
        }
      }
    }
    return orderedItems;
  }

  private isRoot(parentId: number | null, items: Array<FilterableListItem>): boolean {
    return parentId === null || items.find(item => item.id === parentId) === undefined;
  }
}
