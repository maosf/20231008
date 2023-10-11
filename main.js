var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener("submit", addItem);


function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item').value;
    var newli=document.createElement('li');
    newli.className='list-group-item';
    var btn=document.createElement('button');
    btn.className='btn  btn-danger btn-sm float-right delete';
    btn.appendChild(document.createTextNode('X'));
    newli.appendChild(document.createTextNode(newItem));
    newli.appendChild(btn);
    console.log(newItem);
    itemList.appendChild(newli);

}