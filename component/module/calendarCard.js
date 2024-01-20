export default function CalendarCard ({month , monthName , day , dayName , year}) {
    return(
        <div className="parent">
            <div className="calendar-card">
                <div className="content-box">
                    <span className="calendar-card-title">{dayName}</span>
                    <p className="calendar-card-content">
                        {`${month}/${day}/${year}`}
                    </p>
                    {/* <span className="see-more">Change Timezone</span> */}
                </div>
                <div className="date-box">
                    <span className="month">{monthName}</span>
                    <span className="date">{day}</span>
                </div>
            </div>
        </div>
    )
}