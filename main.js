document.getElementById('searchInput').addEventListener('keyup', function(e){
    let searchQuery = e.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName('name');

    for(let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLocaleLowerCase();

        currentName.includes(searchQuery) ? allNamesDOMCollection[counter].style.display = 'block' : allNamesDOMCollection[counter].style.display = 'none';
    }
})