import React, { useMemo } from "react";
import useAlert from "../../hooks/useAlert";
import MuiSnackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// this component progresses through the list of alerts (showing 1 at a time)
const Snackbar = () => {
    const [putAlert, removeAlert, alertList] = useAlert();

    // get the alert to display
    const currentAlert = useMemo(() => {
        return alertList && alertList[0];
    }, [alertList]);

    // if there is not an alert to show,
    // then dont display the snackbar 
    if (Boolean(currentAlert) === false) {
        return null;
    }

    return (
        <MuiSnackbar 
            open={true} 
            autoHideDuration={currentAlert.duration} 
            onClose={() => removeAlert(currentAlert.alertId)}
            anchorOrigin={{ 
                vertical: "top", 
                horizontal: "center" 
            }}
        >
            <MuiAlert 
                onClose={() => removeAlert(currentAlert.alertId)} 
                severity={currentAlert.severity}
                elevation={6} 
                variant="filled"
                sx={{ width: "100%" }}
            >
                {currentAlert.message}
            </MuiAlert>
        </MuiSnackbar>
    )
}

export default Snackbar;