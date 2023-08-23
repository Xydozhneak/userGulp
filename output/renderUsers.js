import users from "./data.js";
const userList = document.querySelector('.user-list');
export function renderCard() {
  users.forEach(function (user) {
    const listItem = document.createElement('li');
    listItem.classList.add('user-item');
    const userInfo = `
      <h2>${user.name}</h2>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Country:</strong> ${user.country}</p>
      <p><strong>Company:</strong> ${user.company}</p>
      <p><strong>Birthday:</strong> ${user.birthday}</p>
    `;
    listItem.innerHTML = userInfo;
    userList.appendChild(listItem);
  });
}
export default renderCard;