let r=document.getElementById("radius")
let vol=document.getElementById("volume")
let form=document.getElementById("MyForm")
// submit.addEventListener("click",volume_sphere)
function volume_sphere(e) {
	e.preventDefault();
    const pie=Math.PI;
	const n=4/3;
	let rad=Number(r.value);
	if(rad<0){
		vol.value=NaN;
		return;
	}
		let vs=n*pie*rad**3;
		vol.value=vs.toFixed(4);
	
	
	// return vs;
	
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
