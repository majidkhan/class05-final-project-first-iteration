import React from "react";
import dateFns from "date-fns";
import "../../App.css";

class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                    currentMonth: new Date(),
                    selectedDate: new Date()
                    };
        }
    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
          </div>
                </div>
                <div className="col col-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "ddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);
        // start i from 1 so that 1 day is added to startdate because everytime startofWeek function gives sunday
        for (let i = 1; i < 8; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart); //by deafult start date is sunday, next step add one more day to it
        const startDate2 = dateFns.addDays(startDate, 1); //added one more day to it
       
        const endDate = dateFns.endOfWeek(monthEnd);
        const endDate2 = dateFns.endOfWeek(endDate);

        console.log(startDate, startDate2, endDate, endDate2);


        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate2;
        let formattedDate = ""; 

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                 const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                        <span className="event-one">{this.findEvents(formattedDate)}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }
    findEvents(date){
        if(this.props.events && this.props.events[0].dates.includes(Number(date))){
          return this.props.events[0].name;
        }else
        return "";
      }
    onDateClick = day => {
        this.setState({
            selectedDate: day
        });
    };

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;