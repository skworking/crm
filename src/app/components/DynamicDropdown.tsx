'use client';
import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
interface OptionType {
  value?: string;
  label: string;
  isHeader?: boolean;
}

const DynamicDropdown: React.FC = () => {
  // States for each dropdown
  const [currentTab, setCurrentTab] = useState<'brand' | 'body' | 'budget' | 'fuel' | 'tonnage'>('brand');
  const [selectedBrand, setSelectedBrand] = useState<string | null>('');
  const [selectedModel, setSelectedModel] = useState<string | null>('');
  const [selectedBody, setSelectedBody] = useState<string | null>('');
  const [selectedBudget, setSelectedBudget] = useState<string | null>('');
  const [selectedFuel, setSelectedFuel] = useState<string | null>('');
  const [selectedTonnage, setSelectedTonnage] = useState<string | null>('');

  // Options for dropdowns
  const brandOptions: OptionType[] = [
    { label: 'POPULAR brands', isHeader: true },
    { value: 'ashok_leyland', label: 'Ashok Leyland' },
    { value: 'tata', label: 'Tata' },
    { value: 'mahindra', label: 'Mahindra' },
    { value: 'eicher', label: 'Eicher' },
  ];

  const modelOptions: Record<string, OptionType[]> = {
    ashok_leyland: [
      { value: 'partner', label: 'Partner' },
      { value: 'dost', label: 'Dost' },
    ],
    tata: [
      { value: 'ace', label: 'Ace' },
      { value: 'ultra', label: 'Ultra' },
    ],
    mahindra: [
      { value: 'bolero', label: 'Bolero' },
      { value: 'imperio', label: 'Imperio' },
    ],
    eicher: [
      { value: 'pro2000', label: 'Pro 2000' },
      { value: 'pro3000', label: 'Pro 3000' },
    ],
  };

  const bodyOptions: OptionType[] = [
    { value: 'pickup', label: 'Pickup' },
    { value: 'container', label: 'Container' },
    { value: 'tipper', label: 'Tipper' },
  ];
  const brandsByBody: Record<string, OptionType[]> = {
    pickup: [
      { value: "ashok_leyland", label: "Ashok Leyland" },
      { value: "mahindra", label: "Mahindra" },
    ],
    container: [
      { value: "tata", label: "Tata" },
      { value: "eicher", label: "Eicher" },
    ],
    tipper: [
      { value: "eicher", label: "Eicher" },
      { value: "ashok_leyland", label: "Ashok Leyland" },
    ],
  };

  const budgetOptions: OptionType[] = [
    { value: "low", label: "Up to ₹10 Lakhs" },
    { value: "medium", label: "₹10-25 Lakhs" },
    { value: "high", label: "Above ₹25 Lakhs" },
    { value: "mid_range_1", label: "₹20-30 Lakhs" },
    { value: "mid_range_2", label: "₹30-40 Lakhs" },
  ];

  // Brand options mapped to each Budget type, including the new ranges
  const brandsByBudget: Record<string, OptionType[]> = {
    low: [
      { value: "mahindra", label: "Mahindra" },
      { value: "eicher", label: "Eicher" },
    ],
    medium: [
      { value: "ashok_leyland", label: "Ashok Leyland" },
      { value: "tata", label: "Tata" },
    ],
    high: [
      { value: "mercedes", label: "Mercedes" },
      { value: "volvo", label: "Volvo" },
    ],
    mid_range_1: [
      { value: "ford", label: "Ford" },
      { value: "isuzu", label: "Isuzu" },
    ],
    mid_range_2: [
      { value: "scania", label: "Scania" },
      { value: "renault", label: "Renault" },
    ],
  };
  const fuelOptions: OptionType[] = [
    { value: 'diesel', label: 'Diesel' },
    { value: 'petrol', label: 'Petrol' },
    { value: 'cng', label: 'CNG' },
  ];
  const brandsByFuel: Record<string, OptionType[]> = {
    diesel: [
      { value: 'ford', label: 'Ford' },
      { value: 'volvo', label: 'Volvo' },
      { value: 'scania', label: 'Scania' },
    ],
    petrol: [
      { value: 'toyota', label: 'Toyota' },
      { value: 'honda', label: 'Honda' },
      { value: 'bmw', label: 'BMW' },
    ],
    cng: [
      { value: 'tata', label: 'Tata' },
      { value: 'maruti', label: 'Maruti' },
      { value: 'hyundai', label: 'Hyundai' },
    ],
  };
  const tonnageOptions: OptionType[] = [
    { value: 'small', label: '2-4 Tons' },
    { value: 'medium', label: '4-8 Tons' },
    { value: 'large', label: 'Above 8 Tons' },
  ];
  const brandsByTonnage: Record<string, OptionType[]> = {
    small: [
      { value: 'tata', label: 'Tata' },
      { value: 'mahindra', label: 'Mahindra' },
      { value: 'ashok', label: 'Ashok Leyland' },
    ],
    medium: [
      { value: 'isuzu', label: 'Isuzu' },
      { value: 'volvo', label: 'Volvo' },
      { value: 'scania', label: 'Scania' },
    ],
    large: [
      { value: 'mercedes', label: 'Mercedes' },
      { value: 'man', label: 'MAN' },
      { value: 'daf', label: 'DAF' },
    ],
  };

  // clear state on tag chnage
  const handleTabChange = (tab: typeof currentTab) => {
    // Clear relevant state when tab changes
    switch (tab) {
      case 'brand':
        setSelectedModel(''); // Clear model when switching to brand tab
        setSelectedBody('');  // Clear body selection
        setSelectedBudget(''); // Clear budget selection
        setSelectedFuel('');   // Clear fuel selection
        setSelectedTonnage(''); // Clear tonnage selection
        break;
      case 'body':
        setSelectedBrand(''); // Clear brand when switching to body tab
        setSelectedModel(''); // Clear model
        setSelectedBudget(''); // Clear budget selection
        setSelectedFuel('');   // Clear fuel selection
        setSelectedTonnage(''); // Clear tonnage selection
        break;
      case 'budget':
        setSelectedBrand(''); // Clear brand when switching to budget tab
        setSelectedModel(''); // Clear model
        setSelectedBody('');  // Clear body selection
        setSelectedFuel('');   // Clear fuel selection
        setSelectedTonnage(''); // Clear tonnage selection
        break;
      case 'fuel':
        setSelectedBrand(''); // Clear brand when switching to fuel tab
        setSelectedModel(''); // Clear model
        setSelectedBody('');  // Clear body selection
        setSelectedBudget(''); // Clear budget selection
        setSelectedTonnage(''); // Clear tonnage selection
        break;
      case 'tonnage':
        setSelectedBrand(''); // Clear brand when switching to tonnage tab
        setSelectedModel(''); // Clear model
        setSelectedBody('');  // Clear body selection
        setSelectedBudget(''); // Clear budget selection
        setSelectedFuel('');   // Clear fuel selection
        break;
      default:
        break;
    }
    setCurrentTab(tab);
  };

  // Handle dropdown change
  const handleDropdownChange = (event: SelectChangeEvent<string | null>, type: string) => {
    console.log(event, type);

    const value = event.target.value as string;
    switch (type) {
      case 'brand':
        setSelectedBrand(value);
        setSelectedModel('');
        break;
      case 'model':
        setSelectedModel(value);
        break;
      case 'body':
        setSelectedBody(value);
        setSelectedBrand(''); // Clear the brand if it's not valid for the selected body type
        break;
      case 'budget':
        setSelectedBudget(value);
        setSelectedBrand('');
        break;
      case 'fuel':
        setSelectedFuel(value);
        setSelectedBrand('');
        break;
      case 'tonnage':
        setSelectedTonnage(value);
        setSelectedBrand('');
        break;
      default:
        break;
    }
  };

  // Render dropdowns based on current tab
  const renderDropdown = () => {
    switch (currentTab) {
      case 'brand':
        return (
          <>
            <FormControl fullWidth margin="normal">
              <InputLabel>Brand</InputLabel>
              <Select
                value={selectedBrand}
                onChange={(e) => handleDropdownChange(e, 'brand')}
                label="Brand"
              >
                {brandOptions.map((option) =>
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
            {
              <FormControl fullWidth margin="normal">
                <InputLabel>Model</InputLabel>
                <Select
                  value={selectedModel || ''}
                  onChange={(e) => handleDropdownChange(e, 'model')}
                  label="Model"
                >

                  {selectedBrand && modelOptions[selectedBrand]?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            }
          </>
        );
      case 'body':
        return (
          <>
            <FormControl fullWidth margin="normal">
              <InputLabel>Body</InputLabel>
              <Select
                value={selectedBody}
                onChange={(e) => handleDropdownChange(e, 'body')}
                label="Body"
              >
                {bodyOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {
              <FormControl fullWidth margin="normal">
                <InputLabel>Brand</InputLabel>
                <Select
                  value={selectedBrand || ''}
                  onChange={(e) => handleDropdownChange(e, 'brand')}
                  label="Brand"
                >

                  {selectedBody && brandsByBody[selectedBody]?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            }
          </>
        );
      case 'budget':
        return (
          <>
            <FormControl fullWidth margin="normal">
              <InputLabel>Budget</InputLabel>
              <Select
                value={selectedBudget}
                onChange={(e) => handleDropdownChange(e, 'budget')}
                label="Budget"
              >
                {budgetOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {
              <FormControl fullWidth margin="normal">
                <InputLabel>Brand</InputLabel>
                <Select
                  value={selectedBrand || ''}
                  onChange={(e) => handleDropdownChange(e, 'brand')}
                  label="Brand"
                >

                  {selectedBudget && brandsByBudget[selectedBudget]?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            }
          </>
        );
      case 'fuel':
        return (
          <>
            <FormControl fullWidth margin="normal">
              <InputLabel>Fuel Type</InputLabel>
              <Select
                value={selectedFuel}
                onChange={(e) => handleDropdownChange(e, 'fuel')}
                label="Fuel Type"
              >
                {fuelOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {
              <FormControl fullWidth margin="normal">
                <InputLabel>Brand</InputLabel>
                <Select
                  value={selectedBrand || ''}
                  onChange={(e) => handleDropdownChange(e, 'brand')}
                  label="Brand"
                >

                  {selectedFuel && brandsByFuel[selectedFuel]?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            }
          </>
        );
      case 'tonnage':
        return (
          <>
            <FormControl fullWidth margin="normal">
              <InputLabel>Tonnage</InputLabel>
              <Select
                value={selectedTonnage}
                onChange={(e) => handleDropdownChange(e, 'tonnage')}
                label="Tonnage"
              >
                {tonnageOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {
              <FormControl fullWidth margin="normal">
                <InputLabel>Brand</InputLabel>
                <Select
                  value={selectedBrand || ''}
                  onChange={(e) => handleDropdownChange(e, 'brand')}
                  label="Brand"
                >

                  {selectedTonnage && brandsByTonnage[selectedTonnage]?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            }
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl rounded-lg bg-white lg:ml-[90px] lg:p-[20px] lg:w-[348px] left-0 lg:absolute top-[54px] z-20 shadow-['0 0 70px 0 rgba(36,39,44,.3)'] lg990:block ">
      <h1 className="text-2xl font-extrabold text-[#24272c]">Search the right truck</h1>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        {['brand', 'body', 'budget', 'fuel', 'tonnage'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab as typeof currentTab)}
            // onClick={() => setCurrentTab(tab as typeof currentTab)}
            className={`flex-1 text-center py-2 ${currentTab === tab ? 'border-b-2 text-red-500 border-red-500 font-bold' : ''
              }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Render Dropdown */}
      {renderDropdown()}

      {/* Search Button */}
      <button className="bg-[#d94025] text-white font-bold text-[20px] px-4 py-2 rounded w-full mt-4">Search</button>
    </div>
  );
};

export default DynamicDropdown;
