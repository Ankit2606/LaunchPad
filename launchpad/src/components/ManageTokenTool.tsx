// src/Manage_Token.js
import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TbHammer } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaHandHoldingUsd } from "react-icons/fa";

const ManageTokenTool = () => {
  return (
    <Card>
      <CardContent>
        <Box sx={{ p: 4 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Box display="flex" alignItems="center">
              <ArrowBackIcon
                sx={{ mr: 2, cursor: "pointer" }}
                onClick={() => window.history.back()}
              />
              <Typography variant="h4"> Manage Token</Typography>
            </Box>
          </Box>

          <Typography variant="subtitle1" color="textSecondary">
            0xfb2aff6bf2d339a5e73ed73f1ec554b6ee3de356
          </Typography>

          <Divider sx={{ my: 2 }} />
          <Box display="flex" alignItems="center">
            <Typography variant="h5" component="div" sx={{ mr: 2 }}>
              Ankit (ANK)
            </Typography>
            <Chip
              icon={<VerifiedIcon />}
              label="Automatic Verification"
              color="primary"
              variant="outlined"
            />
          </Box>
          <Box display="flex" alignItems="center" mt={2}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Token name
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Ankit
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mt={2}>
            <Typography variant="body1" sx={{ mr: 2 }}>
              Token supply
            </Typography>
            <Typography variant="body1" color="textSecondary">
              1,000.0
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2} mt={2}>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                <TbHammer /> Mint
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                <AiOutlineFire /> Burn
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                <CgProfile /> Change owner
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                <FaHandHoldingUsd /> Renounce ownership
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                Blacklist address
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                Pause
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                Edit transaction tax / fee
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                Edit deflation settings
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                Edit asset documentation
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button fullWidth variant="contained" color="primary" className="manageToeknButton">
                Change tokens per address limit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ManageTokenTool;
