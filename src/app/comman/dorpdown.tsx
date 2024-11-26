import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
interface OptionType {
  value?: string;
  label: string;
  isHeader?: boolean; // Optional flag for headers
}

interface DropdownProps {
  options: OptionType[];
  value: string | null;
  onChange: (event: SelectChangeEvent<string | null>) => void;
  placeholder: string;
  ariaLabel: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, placeholder, ariaLabel }) => {
  return (
    <FormControl variant="standard" fullWidth margin="normal">
      <Select
        value={value}
        displayEmpty
        onChange={onChange}
        inputProps={{ 'aria-label': ariaLabel }}
        renderValue={(selected) => {
          if (!selected) return <span>{placeholder}</span>;
          const selectedOption = options.find((option) => option.value === selected);
          return selectedOption ? selectedOption.label : selected;
        }}
      >
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