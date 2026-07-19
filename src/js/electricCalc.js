/*Bài 2: Tính tiền điện */

/*
    *       Input:
    *               1. Nhập tên người sử dụng điện (electricUser / Text Input)
    *               2. Nhập số Kw đã sử dụng (electricUsage / Number Input)
    TODO    Process:
    TODO            1. Lấy giá trị Kw đã sử dung
    TODO            2. Tạo danh sách các điều kiện và công thức tính tổng giá điện đã sử dụng (totalAmount / switch case)
    TODO                Điều kiện 1 (dưới 50kw):    totalAmount = electricUsage * 500
    TODO                Điều kiện 2 (dưới 100kw):   totalAmount = (electricUsage - 50) * 650 + 25,000
    TODO                Điều kiện 3 (dưới 200kw):   totalAmount = (electricUsage - 100) * 850 + 57,500
    TODO                Điều kiện 4 (dưới 350kw):   totalAmount = (electricUsage - 200) * 1100 + 142,500
    TODO                Mặc định:                   totalAmount = (electricUsage - 350) * 1300 + 307,500
    !       Output:
    !               1. In tổng giá điện đã sử dụng (totalAmount)
*/
function electricCalc() {
	let electricUser = document.getElementById('electricUser').value;
	let electricUsage = Number(document.getElementById('electricUsage').value);
	let totalAmount = 0;

	console.log(electricUser, electricUsage);

	switch (true) {
		case electricUsage <= 50:
			totalAmount = electricUsage * 500;
			break;
		case electricUsage <= 100:
			totalAmount = (electricUsage - 50) * 650 + 25000;
			break;
		case electricUsage <= 200:
			totalAmount = (electricUsage - 100) * 850 + 57500;
			break;
		case electricUsage <= 350:
			totalAmount = (electricUsage - 200) * 1100 + 142500;
			break;
		default:
			totalAmount = (electricUsage - 350) * 1300 + 307500;
			break;
	}

	console.log(totalAmount);

	document.getElementById('electricResult').innerHTML =
		`<h3 class="bg-success bg-opacity-25 border-start border-5 border-success my-2 px-3 py-2 rounded-3 m-0">
				Người dùng: ` +
		electricUser +
		` - Số điện đã sử dụng: ` +
		electricUsage +
		` - Tổng giá trị: ` +
		totalAmount +
		`
			</h3>`;
}

document
	.getElementById('electricResultBtn')
	.addEventListener('click', electricCalc);
