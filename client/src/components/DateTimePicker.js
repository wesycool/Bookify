import React, { useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

function BasicDateTimePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  console.log(selectedDate);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <DateTimePicker
        autoOk
        ampm={false}
        disablePast
        value={selectedDate}
        onChange={handleDateChange}
        label="Date and Time"
        dateFormat="MM/dd/yyyy"
      />

    </MuiPickersUtilsProvider>
  );
}

export default BasicDateTimePicker;