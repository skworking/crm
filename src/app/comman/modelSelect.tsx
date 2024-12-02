'use client'
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface ModalProps {
    isModalOpen: boolean;
    options: { label: string; value: string }[];
    selectedOption: string;
    handleSelectCity: (event: SelectChangeEvent) => void;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
    isModalOpen,
    options,
    selectedOption,
    handleSelectCity,
    closeModal,
}) => {
    const [open, setOpen] = useState(true); // State to manage the dropdown open/close

    const handleCloseModal = () => {
        setOpen(false); // Close the dropdown when closing the modal
        closeModal();
    };

    const handleDropdownOpen = () => {
        setOpen(true); // Open the dropdown when the user interacts with it
    };
    return (
        <>
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="md:absolute md:top-32 bg-white md:w-[600px] md:h-[200px] w-full h-full rounded shadow-lg p-4 flex flex-col"
                        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                            onClick={handleCloseModal}
                        >
                            ✕
                        </button>

                        <h3 className="text-[#24272c] font-thin text-[16px] text-center">
                            Which is your city?
                        </h3>

                        <Box sx={{ minWidth: 400, mx: "auto", mt: 4 }}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="city-select-label" shrink>
                                    Type your city, e.g. Jaipur, New Delhi
                                </InputLabel>

                                <Select
                                    labelId="city-select-label"
                                    id="city-select"
                                    value={selectedOption}
                                    onChange={handleSelectCity}
                                    displayEmpty
                                    open={open} 
                                    onOpen={handleDropdownOpen}
                                    onClose={() => setOpen(false)}
                                    inputProps={{ "aria-label": "Without label" }}
                                    label="Type your city, e.g. Jaipur, New Delhi"
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 200, // Set the dropdown height
                                                overflowY: "auto", // Enable scrolling for overflow
                                            },
                                        },
                                    }}
                                    sx={{
                                        "& .MuiSelect-outlined": {
                                            borderColor: "#ccc",
                                            "&:hover": {
                                                borderColor: "#888",
                                            },
                                        },
                                    }}
                                >
                                    {options.map((city) => (
                                        <MenuItem key={city.value} value={city.value}>
                                            {city.label}
                                        </MenuItem>
                                    ))}
                                </Select>

                            </FormControl>
                        </Box>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
