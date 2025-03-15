import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excelDatePipe'
})
export class ExcelDatePipePipe implements PipeTransform {

  // this pipe is used to change the number from Excel to the Date format
  transform(serial: number): unknown {
    if(serial == null || serial == undefined)
      return "";
    const excelStartDate = new Date(1899, 11, 30);
    excelStartDate.setDate(excelStartDate.getDate() + serial);
    const day = this.formatNumber(excelStartDate.getDate());
    const month = this.getMonthName(excelStartDate.getMonth());
    const year = excelStartDate.getFullYear();
    return `${day}-${month}-${year}`;
  }


  // this method is used to format the Date
  private formatNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  // this method is used get the month Name by the index
  private getMonthName(monthIndex: number): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthIndex];
  }

}
