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
} from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Link } from "react-router-dom";

const ManageToken = () => {
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
        Manage your Tokens
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <List>
              {[
                "Create liquidity pool",
                "Mint additional tokens, burn tokens",
                "Change token owner or renounce ownership",
                "Pause and unpause, manage whitelist and blacklist",
                "Works with all tokens that were created with Token Tool",
                "Manage token product documentation",
              ].map((text, index) => (
                <ListItem key={index} sx={{ py: 0.1 }}>
                  <RadioButtonCheckedIcon sx={{ color: "#28b5f6",marginRight: "10px" }} />
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">Token contract address *</Typography>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="0xfb2aff6bf2d339a5e73ed73f1ec554b6ee3de356"
              />
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" color="primary">
                Continue
              </Button>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography >
              Don’t have your own token yet? <Link to="/createToken" style={{ color: "#28b5f6",textDecoration: "none",fontWeight: "bold" }}> Create Token</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ManageToken;
