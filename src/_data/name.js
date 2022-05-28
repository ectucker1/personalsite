const first_name = 'Ethan';
const middle_initial = 'C';
const last_name = 'Tucker';

const formal_name = first_name + ' ' + middle_initial + ' ' + last_name;
const full_name = first_name + ' ' +  last_name;
const site_title = full_name + '\'s Personal Website';

module.exports = {
  first_name: first_name,
  last_name: last_name,
  full_name: full_name,
  formal_name: formal_name,
  site_title: site_title
};
