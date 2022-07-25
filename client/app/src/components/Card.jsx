import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DashboardCard({ score }) {
  return (
    <Box
      sx={{
        width: "70%",
        marginTop: 5,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 15, fontWeight: 600, color: "blue" }}
              gutterBottom
            >
              Exam result
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Your score is
              <br />
              <span style={{ fontSize: "15px", fontWeight: 600 }}>
                {score && score} of 10
              </span>
              <br />
              <span>{score >= 9 ? "PASSED" : "FAIL"}</span>
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
