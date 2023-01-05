export interface TextInputProps {
  value: string;
  placeholder?: string;
  color?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}