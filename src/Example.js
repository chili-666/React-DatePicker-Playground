import React from "react";
import DatePicker from "react-datepicker";
import DayView from "./DayView";
import "react-datepicker/dist/react-datepicker.css";
import { subDays, addDays } from "date-fns";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Example extends React.Component {
  state = {
    startDate: new Date(),
    endDate: addDays(new Date(), 7)
  };

  handleChangeStart = date => {
    this.setState({
      startDate: date,
      endDate: addDays(date, 7)
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    return (
      <div>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={this.state.startDate}
          onChange={this.handleChangeStart}
        />
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={this.state.endDate}
          onChange={this.handleChangeEnd}
          minDate={addDays(this.state.startDate, 7)}
        />
        <DayView date={this.state} />
      </div>
    );
  }
}

export default Example;
