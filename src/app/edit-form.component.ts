import { Mymod } from './mymod.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'app-kendo-grid-edit-form',
    styleUrls: ['./app.component.css'],
    templateUrl: './edit-form.component.html'
})
export class GridEditFormComponent {
    public active = false;
    public editForm: FormGroup = new FormGroup({
        '_id': new FormControl(),
        'city': new FormControl(''),
        'loc': new FormControl(0),
        'pop': new FormControl(''),
        'state': new FormControl(false)
    });

    @Input() public isNew = false;

    @Input() public set model(product: Mymod) {
        this.editForm.reset(product);

        this.active = product !== undefined;
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<Mymod> = new EventEmitter();

// on save from dialog box
    public onSave(e): void {
        e.preventDefault();
        this.save.emit(this.editForm.value);
        this.active = false;
    }
// on cancel from dialog box
    public onCancel(e): void {
        e.preventDefault();
        this.closeForm();
    }
// on closing dialog box
    private closeForm(): void {
        this.active = false;
        this.cancel.emit();
    }
}
