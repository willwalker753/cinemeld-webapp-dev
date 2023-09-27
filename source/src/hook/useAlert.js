import { useSelector, useDispatch } from "react-redux";
import { setAlertList } from "../redux/slice/AlertSlice";
import { v4 as uuidv4 } from "uuid";

const useAlert = () => {
    const alertList = useSelector((state) => state.alert.alertList);
    const dispatch = useDispatch();

    /*
    the message field is a duplicate field
    so if a message with the same message is put, then the old one is removed, and the new one added. which restarts the duration

    params
        severity  (string)  "error" | "warning" | "info" | "success"
        message   (string)
        duration  (number)  The number of milliseconds until the alert automatically closes

    returns
        alertId   (string)
    */
    const putAlert = (severity, message, duration) => {
        const alertId = uuidv4();
        const alertListDeduplicated = alertList.filter(alert => alert.message !== message);
        const newAlertList = [
            ...alertListDeduplicated,
            {
                alertId,            
                severity,
                message,
                duration
            }
        ]
        dispatch(setAlertList(newAlertList));
    }

    const removeAlert = (alertId) => {
        const newAlertList = alertList.filter(alert => alert.alertId !== alertId);
        dispatch(setAlertList(newAlertList));
    }

    return [
        putAlert,
        removeAlert,
        alertList
    ]
}

export default useAlert;