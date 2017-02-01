var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
          <input name='title' placeholder='Appointment Title'
            value={this.props.title}
            onChange={this.handleChange} />
          <input name='appt_time' placeholder='Date and Time'
            value={this.props.appt_time}
            onChange={this.handleChange} />
          <input type='submit' value='Make Appointment' />
        </form>
      </div>
    )
  }
});
