/*
    *       Input:
    *               1. Loại khách hàng (idType / Dropdown Input)
    *               2. Mã khách hàng (idSeries / Text Input)
    *               3. Số kết nối (numberOfConnections / Number Input)
    *               4. Số kênh cao cấp (numberOfPremiumChannels / Number Input)
    TODO    Process:
    TODO            1. Lấy giá trị loại khách hàng (idType)
    TODO            2. Đặt điều kiện cho trường số kết nối (if case)
    TODO                Điều kiện 1 (idType == customer): kích hoạt trường nhập số kết nối (numberOfConnections)
    TODO                Điều kiện 2 (idType == business): khóa trường nhập số kết nối và đặt giá trị mặc định là 0
    TODO            3. Lấy giá trị Mã khách hàng, số kết nối (dựa vào Process 2) và số kênh cao cấp
    TODO            4. Đặt điều kiện cho phí xử lý hóa đơn(receiptFee), phí dịch vụ cơ bản(basicFee), số kết nối (totalConnections), và phí thuê kênh cao cấp (premiumChannelsFee) (if case)
    TODO                Điều kiện 1 (idType == customer):
    TODO                            Phí xử lý hóa đơn:      $4.5
    TODO                            Phí dịch vụ cơ bản:     $20.5
    TODO                            Phí thuê kênh cao cấp:  $7.5 / kênh
    TODO                            Số kết nối: totalConnections = 1
    TODO                Điều kiện 2 (idType == business):
    TODO                            Phí xử lý hóa đơn:      $15
    TODO                            Phí dịch vụ cơ bản:     $75 + $5 / kết nối
    TODO                            Phí thuê kênh cao cấp:  $50 / kênh
    TODO                            Số kết nối: totalConnections = 10 + numberOfConnections
    !       Output:
    !               1. In tổng hóa đơn khách hàng
*/

let globalIdType = '';

function fieldController() {
	globalIdType = document.getElementById('idType').value;
	if (globalIdType == 'customer') {
		document.getElementById('numberOfConnections').placeholder =
			'Dành cho doanh nghiệp';
		document.getElementById('numberOfConnections').disabled = true;
	} else if (globalIdType == 'business') {
		document.getElementById('numberOfConnections').placeholder =
			'Nhập số kết nối';
		document.getElementById('numberOfConnections').disabled = false;
	} else if (globalIdType == '') {
		document.getElementById('numberOfConnections').placeholder =
			'Hãy chọn loại khách hàng';
		document.getElementById('numberOfConnections').disabled = true;
	}
}

function cableCalc() {
	if (globalIdType == '') {
		console.error('Hãy chọn loại khách hàng...');
		return;
	}

	let idSeries = document.getElementById('idSeries').value;
	let receiptFee = globalIdType == 'customer' ? 4.5 : 15;
	let basicFee =
		globalIdType == 'customer'
			? 20.5
			: (75 + 5) *
				(document.getElementById('numberOfConnections').value + 10);
	let premiumChannelsFee =
		(globalIdType == 'customer' ? 7.5 : 50) *
		document.getElementById('numberOfPremiumChannels');

	let totalAmount = receiptFee + basicFee + totalConnection;

	document.getElementById('cableResult').innerHTML =
		`<h3 class="bg-success bg-opacity-25 border-start border-5 border-success my-2 px-3 py-2 rounded-3 m-0">
				Mã khách hàng: ` +
		idSeries +
		` - Loại khách hàng: ` +
		globalIdType +
		` - Phí xử lý hóa đơn: ` +
		receiptFee +
		` - Phí cơ bản: ` +
		basicFee +
		` - Phí thuê kênh cao cấp: ` +
		premiumChannelsFee +
		`.
			</h3>`;
}

document.getElementById('idType').addEventListener('change', fieldController);
document.getElementById('cableResultBtn').addEventListener('click', cableCalc);
