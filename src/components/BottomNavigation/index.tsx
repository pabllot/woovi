import { useState, useEffect } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddCardIcon from "@mui/icons-material/AddCard";
import PixIcon from "@mui/icons-material/Pix";

export const SimpleBottomNavigation = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const color = "rgba(178, 178, 178, 1)";
  const activeColor = "#03d69d";

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/2":
        setValue(1);
        break;
      case "/3":
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Parcelas "
          icon={<PaymentsIcon sx={{ color: value === 0 ? activeColor : color }} />}
          component={Link}
          to="/"
          style={{ color: value === 0 ? activeColor : color }}
        />
        <BottomNavigationAction
          label="PIX"
          icon={<PixIcon sx={{ color: value === 1 ? activeColor : color }} />}
          component={Link}
          to="/2"
          style={{ color: value === 1 ? activeColor : color }}
        />
        <BottomNavigationAction
          label="Cartão"
          icon={<AddCardIcon sx={{ color: value === 2 ? activeColor : color }} />}
          component={Link}
          to="/3"
          style={{ color: value === 2 ? activeColor : color }}
        />
      </BottomNavigation>
    </Box>
  );
};
