import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <DateTimePicker
        autoOk
        ampm={false}
        value={selectedDate}
        onChange={handleDateChange}
        label="Date and Time"
        disablePast
      />

    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;