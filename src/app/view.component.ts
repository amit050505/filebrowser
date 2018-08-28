import { Mymod } from './mymod.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'app-view-details',
    styleUrls: ['./app.component.css'],
    templateUrl: './view.component.html'
})
export class ViewDetailsComponent {
    public active = true;
    public viewproduct: FormGroup = new FormGroup({
        '_id': new FormControl(),
        'city': new FormControl(''),
        'loc': new FormControl(0),
        'pop': new FormControl(''),
        'state': new FormControl(false)
    });

    @Input() public set model1(product: Mymod) {
        this.viewproduct.reset(product);
        this.active = product !== undefined;
        // console.log(this.active);
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();

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
