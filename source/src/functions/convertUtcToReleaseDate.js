import moment from "moment";

/*
    @param  (string) utcDate   "Year-Month-Day" format e.g. "2023-11-18"

    @return (string)           the release date in local time e.g. "11/18/2023" (string format may change in future)
*/
const convertUtcToReleaseDate = (utcDate) => {
    try {
        const releaseDate = moment
            .utc(utcDate, "YYYY-MM-DD")
            .local()
            .format("M/D/YYYY");
        return releaseDate;
    } catch(error) {
        return "";
    }
}

export default convertUtcToReleaseDate;