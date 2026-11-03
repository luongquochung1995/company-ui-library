import {
  ChangeDetectionStrategy,
  Component,
  input,
  output
} from '@angular/core';

export type UiButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'outline';

export type UiButtonSize =
  | 'small'
  | 'medium'
  | 'large';

@Component({
  selector: 'ui-button',
  standalone: true,
  template: `
    <button
      [type]="type()"
      [disabled]="disabled() || loading()"
      [class]="'ui-button ui-button--' + variant()
        + ' ui-button--' + size()"
      (click)="clicked.emit($event)"
    >
      @if (loading()) {
        <span class="ui-button__loader"></span>
      }

      <ng-content />
    </button>
  `,
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  variant = input<UiButtonVariant>('primary');

  size = input<UiButtonSize>('medium');

  type = input<'button' | 'submit' | 'reset'>('button');

  disabled = input(false);

  loading = input(false);

  clicked = output<MouseEvent>();
}