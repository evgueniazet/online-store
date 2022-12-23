export interface RangePickerProps {
  min?: number;
  max?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}