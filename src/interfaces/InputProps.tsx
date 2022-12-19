export interface InputProps {
  value: string;
  placeholder?: string;
  color?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}