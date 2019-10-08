/*
  AJAX request to find whether each employee is in or out of office
*/
const employeeRequest = new XMLHttpRequest();
employeeRequest.onreadystatechange = function() {
  if (employeeRequest.readyState === 4) {
    const employees = JSON.parse(employeeRequest.responseText);
    let statusHTML = '<ul class="bulleted">';
    for (const employee of employees) {
      statusHTML += `<li class="${employee.inoffice ? 'in' : 'out'}">`;
      statusHTML += `${employee.name}</li>`;
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
employeeRequest.open('GET', 'data/employees.json');
employeeRequest.send();

/*
  AJAX request to find whether each room is available
*/
const roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function() {
  if (roomRequest.readyState === 4) {
    const rooms = JSON.parse(roomRequest.responseText);
    let statusHTML = '<ul class="rooms">';
    for (const room of rooms) {
      statusHTML += `<li class="${room.available ? 'empty' : 'full'}">`;
      statusHTML += `${room.room}</li>`;
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();
