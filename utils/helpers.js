module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  // custom helper 'format_date' uses a timestamp
  format_date: (date) => {
    // Get and format the month, date, and year using JS methods
    // Add one to the month since it is returned as a zero-based value
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      // ? We add five years to the 'year' value to calculate the end date
      new Date(date).getFullYear() + 5
    }`;
  },
};
