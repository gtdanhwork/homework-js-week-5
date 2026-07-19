/*Bài 3: Tính thuế thu nhập cá nhân */

/*
    *       Input:
    *               1. Nhập Họ tên người sử dụng điện (taxUser / Text Input)
    *               2. Nhập tổng thu nhập năm (annualIncome / Number Input)
    *               3. Nhập số người phụ thuộc (numberOfDependents / Number Input)
    TODO    Process:
    TODO            1. Lấy giá trị tổng thu nhập năm (annualIncome), và số người phụ thuộc (numberOfDependents)
    TODO            2. Tính thu nhập chịu thuế (taxIncome): taxIncome = annualIncome - 4000000 - numberOfDependents * 1600000
    TODO            3. Tạo danh sách các điều kiện và công thức tính thuế thu nhập cá nhân (taxPersonalIncome / Switch Case)
    TODO                Điều kiện 1 (dưới hoặc bằng 60,000,000):        taxPersonalIncome = taxIncome * 5%
    TODO                Điều kiện 2 (dưới hoặc bằng 120,000,000):       taxPersonalIncome = taxIncome * 10%
    TODO                Điều kiện 3 (dưới hoặc bằng 210,000,000):       taxPersonalIncome = taxIncome * 15%
    TODO                Điều kiện 4 (dưới hoặc bằng 384,000,000):       taxPersonalIncome = taxIncome * 20%
    TODO                Điều kiện 5 (dưới hoặc bằng 624,000,000):       taxPersonalIncome = taxIncome * 25%
    TODO                Điều kiện 6 (dưới hoặc bằng 960,000,000):       taxPersonalIncome = taxIncome * 30%
    TODO                Mặc định:                                       taxPersonalIncome = taxIncome * 35%
    !       Output:
    !               1. In giá trị thuế thu cá nhân (taxPersonalIncome)
*/
function electricCalc() {
	let taxUser = document.getElementById('taxUser').value;
	let annualIncome = Number(document.getElementById('annualIncome').value);
	let numberOfDependents = Number(
		document.getElementById('numberOfDependents').value,
	);

	let taxincome = annualIncome - 4000000 - numberOfDependents * 1600000;

	let taxPersonalIncome = 0;

	switch (true) {
		case electricUsage <= 60000000:
			taxPersonalIncome = taxIncome * 0.05;
			break;
		case electricUsage <= 120000000:
			taxPersonalIncome = taxIncome * 0.1;
			break;
		case electricUsage <= 210000000:
			taxPersonalIncome = taxIncome * 0.15;
			break;
		case electricUsage <= 384000000:
			taxPersonalIncome = taxIncome * 0.2;
			break;
		case electricUsage <= 624000000:
			taxPersonalIncome = taxIncome * 0.25;
			break;
		case electricUsage <= 96000000:
			taxPersonalIncome = taxIncome * 0.3;
			break;
		default:
			taxPersonalIncome = taxIncome * 0.35;
			break;
	}

	console.log(taxincome);

	document.getElementById('electricResult').innerHTML =
		`<h3 class="bg-success bg-opacity-25 border-start border-5 border-success my-2 px-3 py-2 rounded-3 m-0">
				Người dùng: ` +
		taxUser +
		` - Thu nhập chịu thuế: ` +
		electricUsage +
		` - Thuế cá nhân: ` +
		totalAmount +
		`
			</h3>`;
}

document.getElementById('taxResultBtn').addEventListener('click', taxCalc);
