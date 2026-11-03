export interface UiTableColumn<T> {
  field: keyof T;
  header: string;
  width?: string;
  sortable?: boolean;
}

export interface UiTableConfig<T> {
  columns: UiTableColumn<T>[];
  data: T[];
  loading?: boolean;
}