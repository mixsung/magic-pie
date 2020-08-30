document.querySelector("body").innerHTML = `
<h1>환경인간</h1>
`;  
const browseBtn = document.querySelector('.browse-btn');
const realInput = document.querySelector('#real-input');

browseBtn.addEventListener('click',()=>{
	realInput.click();
});