
let x = document.getElementById("add");
x.addEventListener("click", () => {
    item = document.getElementById('items');
    desc = document.getElementById('description');
    itmcnt = parseInt(document.getElementsByTagName("th")[4].innerText);

    document.getElementById('itemsList').innerHTML += `<tr>
    <th scope="row">${itmcnt+1}</th>
    <td>${item.value}</td>
    <td>${desc.value}</td>
    <td><button class="btn btn-primary" id="action">Delete</button></td>
  </tr>`;
    itmcnt += 1;
});
