import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // Variables to store data and sideNavWidth
  storageData: any[] = [];

  ngOnInit() {
    // Load data from local storage when the component initializes
    const extractedData = localStorage.getItem('data');
    this.storageData = extractedData ? JSON.parse(extractedData) : [];
  }

  removeRow(id: number) {
    this.storageData.splice(id, 1);
    localStorage.setItem('data', JSON.stringify(this.storageData));
    window.location.reload();
  }

  searchTable(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    const rows = document.querySelectorAll("#table tr");

    rows.forEach((row: any) => {
      const found = Array.from(row.getElementsByTagName("td")).some(
        (cell: any) => cell.innerHTML.toLowerCase().includes(input)
      );
      row.style.display = found ? "" : "none";
    });
  }

  // Other methods and event listeners can be added here
  // For example, handling the sideNav and hamburger click event
 

  // Other code...
}
