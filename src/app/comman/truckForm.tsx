import { useEffect, useState } from "react";
import { TextField, MenuItem, Select, Checkbox, FormControlLabel, Button, InputLabel, FormControl, SelectChangeEvent, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { FaWhatsapp } from "react-icons/fa";

interface FormData {
  name: string;
  mobileNumber: string;
  pincode: string;
  tonnage: string;
  budget: string;
  fuelType: string;
  brandModel: string;
  bulkBuying: boolean;
  whatsappUpdates: boolean;
}

const BuyTruckForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    mobileNumber: "",
    pincode: "",
    tonnage: "",
    budget: "",
    fuelType: "All",
    brandModel: "",
    bulkBuying: false,
    whatsappUpdates: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    console.log(e.target);

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Handle select changes (for dropdowns like Select)
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  useEffect(() => {
    const isValidName = formData.name.trim().length > 0;
    const isValidMobileNumber = /^[0-9]{10}$/.test(formData.mobileNumber); // 10-digit number check
    const isValidPincode = formData.pincode.trim().length > 0;
    const isValidTonnage = formData.tonnage.trim().length > 0;
    const isValidBudget = formData.budget.trim().length > 0;
    const isValidFuelType = formData.fuelType.trim().length > 0;
    const isValidBrandModel = formData.brandModel.trim().length > 0;

    const allValid = isValidName && isValidMobileNumber && isValidPincode && isValidTonnage && isValidBudget && isValidFuelType && isValidBrandModel;

    setIsFormValid(allValid);
  }, [formData]);
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-auto relative">
      <h2 className="text-2xl font-semibold mb-2">Buy Used Truck</h2>
      <p className="text-gray-600 mb-4">
        We only ask these once and your details are safe with us
      </p>
      <form onSubmit={handleSubmit} className="flex-col space-y-2">

        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          variant="outlined"
          required
        />
        <div className="grid grid-cols-2 gap-2">
          <TextField
            fullWidth
            label="Mobile Number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            variant="outlined"
            required
            type="tel"
          />
          <TextField
            fullWidth
            label="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            variant="outlined"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <FormControl fullWidth variant="outlined" required>
            <InputLabel>Tonnage</InputLabel>
            <Select
              name="tonnage"
              value={formData.tonnage}
              onChange={handleSelectChange}
              label="Tonnage"
            >
              <MenuItem value="">Select Tonnage</MenuItem>
              <MenuItem value="5T">5T</MenuItem>
              <MenuItem value="10T">10T</MenuItem>
              <MenuItem value="20T">20T</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel>Budget</InputLabel>
            <Select
              name="budget"
              value={formData.budget}
              onChange={handleSelectChange}
              label="Budget"
            >
              <MenuItem value="">Select Budget</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <FormControl fullWidth variant="outlined" required>
            <InputLabel>Fuel Type</InputLabel>
            <Select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleSelectChange}
              label="Fuel Type"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Diesel">Diesel</MenuItem>
              <MenuItem value="Electric">Electric</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Brand & Model"
            name="brandModel"
            value={formData.brandModel}
            onChange={handleInputChange}
            variant="outlined"
            required
          />
        </div>

        <FormControlLabel
          control={
            <Checkbox
              name="bulkBuying"
              sx={{
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
              checked={formData.bulkBuying}
              onChange={handleInputChange}
            />
          }
          label="Do you want bulk buying?"
        />



        <FormControlLabel
          control={
            <Checkbox
              sx={{
                '&.Mui-checked': {
                  color: red[600],
                },
              }}
              name="whatsappUpdates"
              checked={formData.whatsappUpdates}
              onChange={handleInputChange}
            />
          }
          // label="Allow updates on WhatsApp"
          label={
            <div className="inline-flex items-baseline gap-1">
              <div>
                <Typography variant="body1">
                  Allow updates on WhatsApp
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray' }}>
                  you can opt out anytime
                </Typography>
              </div>
              <FaWhatsapp className="text-green-600" />
            </div>
          }
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          size="large"
          disabled={!isFormValid} // Button is disabled if form is not valid
          sx={{
            backgroundColor: isFormValid ? red[600] : 'gray',
            '&:hover': {
              backgroundColor: isFormValid ? red[700] : 'gray',
            },
          }}
        >
          Submit
        </Button>
        
      </form>

      <p className="text-center text-sm text-gray-600 mt-4">
        We respect privacy and your information is secure with us. By proceeding ahead, you expressly agree to our{" "}
        <a href="#" className="text-blue-500 hover:underline">T&C</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default BuyTruckForm;
