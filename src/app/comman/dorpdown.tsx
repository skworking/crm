import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface OptionType {
  value: string;
  label: string;
  isHeader?: boolean;
}

interface DropdownProps {
  value: string | null;
  label: string;
  options: OptionType[];
  onChange: (e:SelectChangeEvent<string | null>, field: string) => void;
  field: string;
}

const Dropdown: React.FC<DropdownProps> = ({ value, label, options, onChange, field }) => {
  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>{label}</InputLabel>
      <Select value={value || ''} onChange={(e) => onChange(e, field)} label={label}>
        {options.map((option) =>
          option.isHeader ? (
            <MenuItem disabled key={option.label}>
              {option.label}
            </MenuItem>
          ) : (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
