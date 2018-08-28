import { Component, Input } from '@angular/core';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { FilterService, BaseFilterCellComponent } from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-my-dropdown-filter',
    template: `
    <kendo-dropdownlist
    [data]="data"
    (valueChange)="onChange($event)"
    [defaultItem]="defaultItem"
    [value]="selectedValue"
    [valuePrimitive]="true"
    [(ngModel)]="selectedValue"
    >
    </kendo-dropdownlist>
  `
})
export class DropDownListFilterComponent extends BaseFilterCellComponent {

    public selectedValue: string;

    @Input() public filter: CompositeFilterDescriptor;
    @Input() public data: any[];
    @Input() public field: string;

    public get defaultItem(): any {
        return 'Select';
    }

    constructor(filterService: FilterService) {
        super(filterService);
    }

    public onChange(value: any): void {
        console.log('in onchange');
        console.log(value);
        console.log(this.selectedValue);
        console.log(this.field);

        this.applyFilter(
            value === 'Select' ? // value of the default item
                this.removeFilter(this.field) : // remove the filter
                this.updateFilter(
                    { // add a filter for the field with the value
                        field: this.field,
                        operator: 'eq',
                        value: value
                    }
                )
        ); // update the root filter
    }
}
