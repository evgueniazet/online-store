import { MultiRangeSliderData } from "./MultiRangeSliderData";

export interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: ({ min, max }: MultiRangeSliderData) => void;
}