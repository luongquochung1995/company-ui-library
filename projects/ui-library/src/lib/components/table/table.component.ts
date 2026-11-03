import {
  ChangeDetectionStrategy,
  Component,
  input,
  output
} from '@angular/core';

import { UiTableColumn } from '../../models/table.model';

@Component({
  selector: 'ui-table',
  standalone: true,
  template: `
    <table>
      <thead>
        <tr>
          @for (column of columns(); track column.field) {
            <th [style.width]="column.width">
              {{ column.header }}
            </th>
          }
        </tr>
      </thead>

      <tbody>
        @for (row of data(); track $index) {
          <tr>
            @for (column of columns(); track column.field) {
              <td>
                {{ row[column.field] }}
              </td>
            }
          </tr>
        } @empty {
          <tr>
            <td [attr.colspan]="columns().length">
              No data available
            </td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T extends object> {

  columns = input.required<UiTableColumn<T>[]>();

  data = input.required<T[]>();

  rowClick = output<T>();

}