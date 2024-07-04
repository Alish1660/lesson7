import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Order } from "@modal";
import { Search } from "@mui/icons-material";

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Order open={open} handleClose={() => setOpen(false)} />
      <div className="flex justify-between items-center">
        <div className="w-[400px]">
          <TextField
            variant="outlined"
            placeholder="Search..."
            fullWidth
            InputProps={{
              startAdornment: (
                <Search className="h-5 w-5 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" />
              ),
              disableUnderline: true,
              style: {
                padding: "4px 36px 4px 12px",
                fontSize: "12px",
                height: "35px",
              },
            }}
          />
        </div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add Orders
        </Button>
      </div>
    </>
  );
};

export default Index;