const menus=document.querySelectorAll('.list_menu');
for (let menu of menus) {
	menu.addEventListener('click',function(event){
		const name=menu.querySelector('h3');
		const value=menu.querySelector('h4');
		const onCart={
			theName:name.innerText,
			theValue:value.innerText
		}
		console.log(onCart);
		putHistory(onCart);
		renderHistory();
		alert("Berhasil Ditambahkan Kekeranjang Anda");
	});
}
const hapus=document.querySelector('#hapus');
hapus.addEventListener('click', function(event){
	localStorage.removeItem(CACHE_KEY);
	renderHistory();
});
