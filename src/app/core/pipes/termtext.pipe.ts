import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext',
  standalone: true
})
export class TermtextPipe implements PipeTransform {

  transform(text:string , limit:number): unknown {
    return text.split(" ",limit).join(" ") ;
  }

}
