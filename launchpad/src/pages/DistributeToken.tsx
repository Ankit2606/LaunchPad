import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  Autocomplete,
} from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "80%",
    "& .MuiOutlinedInput-root": {
      '&.Mui-focused fieldset': {
        borderColor: '#28b5f6',
      },

    },
  },
  input: {
    color: '#28b5f6', 
    fontSize: '12px',
  },
  dropdownItem: {
    color: "#28b5f6",
    fontSize: "11px",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#c3d1d7",
    },
  },
  selectedItem: {
    backgroundColor: "white",
  },
}));

const DistributeToken = () => {
  const classes = useStyles();
  const tokens = [
    { label: "ANK", address: "0xfb2aff6bf2d339a5e73ed73f1ec554b6ee3de356" },
    { label: "MTK", address: "0xfaeea9d72ccd59c3290a3faa1aec82ff9b85a6f1" },
    { label: "NTK", address: "0xddb3c3627cfacc96332ff91af6653500021816" },
    { label: "ANK", address: "0xfb2aff6bf2d339a5e73ed73f1ec554b6ee3de356" },
    { label: "MTK", address: "0xfaeea9d72ccd59c3290a3faa1aec82ff9b85a6f1" },
    { label: "NTK", address: "0xddb3c3627cfacc96332ff91af6653500021816" },
    { label: "ANK", address: "0xfb2aff6bf2d339a5e73ed73f1ec554b6ee3de356" },
    { label: "MTK", address: "0xfaeea9d72ccd59c3290a3faa1aec82ff9b85a6f1" },
    { label: "NTK", address: "0xddb3c3627cfacc96332ff91af6653500021816" },
  ];
  return (
    <Box sx={{ mt: 4 }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#000",
          fontSize: "24px",
          lineHeight: "34px",
          marginBottom: "20px",
        }}
      >
        MultiSend SepoliaETH or ERC20 Tokens to Multiple Recipients
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List>
              {[
                "Token multiSender dApp for all of your tokens",
                "Send your tokens to multiple recipients efficiently",
                "Send stable coins or cryptocurrency for dividend or coupon payments",
                "Input list of addresses and amounts manually",
                "Distribute automatically via CSV upload",
                "Distribute token product documentation",
              ].map((text, index) => (
                <ListItem key={index} sx={{ py: 0.1 }}>
                  <RadioButtonCheckedIcon
                    sx={{ color: "#28b5f6", marginRight: "10px" }}
                  />
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ mt: 4, fontWeight: "900" }}>
                Token contract address *
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={tokens}
                getOptionLabel={(option) => `${option.address}`}
                renderInput={(params) => (
                  <TextField {...params} sx={{ width: "80%" }} className={classes.textField} />
                )}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    {...props}
                    className={classes.dropdownItem}
                  >
                    <Typography variant="body2" sx={{ display:"flex"}}>
                      <span style= {{fontWeight: "800",flexGrow: 1}}>{option.label}</span>  <span style={{ color: "black",}}>{option.address}</span>
                    </Typography>
                  </Box>
                )}
              />
            </Box>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ mt: 4, mb: 2, fontWeight: "900" }}
            >
              Addresses with amounts
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                p: 3,
                mb: 3,
                textAlign: "center",
                backgroundColor: "#f9f9f9",
                border: "2px dashed #07aaf4",
                width: "80%",
              }}
            >
              <CloudUploadIcon
                color="action"
                sx={{ fontSize: 40, color: "#07aaf4" }}
              />
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#07aaf4" }}
              >
                Drag and drop your file here or click to upload
              </Typography>
              <Typography variant="body2" color="textSecondary">
                CSV / Excel / Txt
              </Typography>
            </Paper>

            <Typography
              variant="body1"
              gutterBottom
              sx={{ mt: 4, mb: 2, fontWeight: "900" }}
            >
              Insert manually
            </Typography>
            <TextField
              label="Insert manually"
              variant="outlined"
              multiline
              rows={6}
              placeholder="1"
              sx={{ mb: 1, width: "80%" }}
            />
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">
                Continue
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DistributeToken;
