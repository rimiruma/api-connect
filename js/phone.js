const loadPhone = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhone(phones);
}


const displayPhone = phones => {
  console.log(phones)

const phoneContainer = document.getElementById('phone-container')
// clear phone container cards before adding new cards
phoneContainer.textContent = '';

// display show all button if there are more then 12 phomes
const showAllContainer = document.getElementById('show-all-container')
if(phones.length > 12){
  showAllContainer.classList.remove('hidden')
}
else{
  showAllContainer.classList.add('hidden')
}
// display only first 12 phones
phones = phones.slice(0,12);

  phones.forEach(phone => {
    console.log(phone);
    // 1 create a div
    const phoneCard = document.createElement('div')
    phoneCard.classList = `card max-w-xs bg-gray-100 p-4 shadow-xl`;
    // 3: set inner html
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
    `;
    // 4 append child
    phoneContainer.appendChild(phoneCard)
  })

}

// handle search button
const handleSearch = () =>{
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value
console.log(searchText)
loadPhone(searchText)
}
// handle search recap 
const handleSearch2 =() =>{
  toggleLoadingSpinner(true)
  const searchField = document.getElementById('search-field2')
  const searchText = searchField.value
loadPhone(searchText)
}

const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner')
 if(isLoading){
  loadingSpinner.classList.remove('hidden')
 }
}
// loadPhone()
