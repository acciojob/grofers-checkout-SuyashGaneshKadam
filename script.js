const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0;
	let prices = document.querySelectorAll(".price");
	for(let i=0 ; i<prices.length ; i++){
		sum += parseInt(prices[i].innerText);
	}
	// console.log(sum);
	let tr = document.createElement("tr");
	let td = document.createElement("td");
	td.innerText = sum;
	tr.append(td);
	let table = document.querySelector("table");
	table.append(tr);
};

getSumBtn.addEventListener("click", getSum);

