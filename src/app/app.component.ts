import { Mymod } from './mymod.model';
import { Component } from '@angular/core';
import { sampledata } from './sampledata';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditService } from './edit.service';
import { State, process } from '@progress/kendo-data-query';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { timer, forkJoin } from 'rxjs';
import { take, concat, merge } from 'rxjs/operators';
import { File } from './file.model';
import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent,
  PageChangeEvent
} from '@progress/kendo-angular-grid';
import { data } from './directoryData.data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public responseData: any;
  public activeItems=[];

  constructor(private ser: EditService) {
     //this.getAllRecords();
     this.responseData=data.articles;
  }

  getAllRecords() {

    this.ser.getAllArticles().subscribe(
      data => {
      this.responseData = data;
      
    });
  }


  GetInnerItems(obj) {
    
    
    if(Object.prototype.toString.call(obj) === '[object Array]')
      {
        for( let i of obj)
          {
            this.GetInnerItems(i);
          }
      }
      else if(typeof obj == 'object')
        {
          for(let key of Object.keys(obj))
            {
              let tempfile=new File();
              if(typeof obj[key] == 'object')
                {
                  tempfile.filename=key;
                  tempfile.filetype="Folder";
                  this.activeItems.push(tempfile);
                }
              else if(key == 'file_name')
                {
                  
                  tempfile.filename=obj["file_name"];
                  tempfile.filetype=obj["type"];
                  this.activeItems.push(tempfile);
                }                                            
            }
        }
        else{

        }    
    }

    getKeys(item) {
      let arr=[];
      if(Object.prototype.toString.call(item) === '[object Array]')
        {
          for(let it of item)
            {
             
              arr.push(it.file_name);
            }
        }
      else if(typeof item == 'object'){
          for(let k of Object.keys(item))
            {
              if(k!='title')
                {
                  arr.push(k);
                }
            }
      }
     return arr;
    }

    collapseHide(obj, event){
      this.activeItems.length=0;
      this.GetInnerItems(obj);
      
      let childs=event.target.parentNode.children;
      for(let c of childs)
        {
            
            if(c.tagName == 'DIV')
              {
                
                if(c.style.display !== 'none')
                  c.style.display="none";
                else if(c.style.display == 'none')
                  c.style.display="block";
              }              
        }  
        
    }
}