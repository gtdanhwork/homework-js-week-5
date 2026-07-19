/*Bài 1: Quản lý Tuyển Sinh */

/*
    *       Input:
    *           1. Nhập điểm chuẩn của hội đồng (minScore / Number Input Field / Range 1 - 30)
    *           2. Chọn khu vực (areaPriority / Dropdown Text Input Field)
    *               A: 2
    *               B: 1
    *               C: 1.5
    *           3. Chọn đối tượng (groupPriority)
    *               1: 2.5
    *               2: 1.5
    *               3: 1
    *           4. Nhập điểm số 3 môn
    *               Môn 1 (firstSubject / Number Input Field / Range 1 - 10)
    *               Môn 2 (secondSubject / Number Input Field / Range 1 - 10)
    *               Môn 3 (thirdSubject / Number Input Field / Range 1 - 10)
    TODO    Process:
    TODO        1. Kiểm tra 3 điểm nhập vào, điều kiện không có điểm nào đạt 0. (Sử dụng if)
    TODO        2. Kiểm tra khu vực và đối tượng ưu tiên đã được chọn (Sử dụng if)
    TODO        3. Gán điểm cộng vào areaPriority groupPriority dựa vào input người dùng (Sử dụng switch case)
    TODO        4. Công thức tổng kết quả: totalScore = firstSubject + secondSubject + thirdSubject + areaPriority + groupPriority
    TODO        5. So sánh điểm minScore và totalScore, đậu nếu totalScore => minScore và loại nếu totalScore < minScore (Sử dụng if)
    !       Output:
    !           1. Xuất ra kết quả loại **dựa vào 1 trong 3 điều kiện**
    !               Điều kiện 1: có ít nhất 1 trong 3 môn đạt điểm 0
    !               Điều kiện 2: điểm tổng kết dưới điểm của hội đồng
    !           2. Xuất ra kết quả đạt khi **đáp ứng cả 3 điều kiện**
    !               Điều kiện 1: cả 3 môn đều trên 0
    !               Điều kiện 3: điểm tổng kết đạt trên điểm của hội đồng
*/
function scoreAudit() {
	let minScore = Number(document.getElementById('minScore').value);

	let firstSubject = Number(document.getElementById('firstSubject').value);
	let secondSubject = Number(document.getElementById('secondSubject').value);
	let thirdSubject = Number(document.getElementById('thirdSubject').value);

	let areaPriority = Number(
		document.querySelector('input[name=areaSelector]:checked').value,
	);
	let groupPriority = Number(
		document.querySelector('input[name=prioritySelector]:checked').value,
	);

	if (firstSubject == '' || secondSubject == '' || thirdSubject == '') {
		document.getElementById('auditResult').innerHTML =
			`<h3 class="bg-danger bg-opacity-25 border-start border-5 border-danger my-2 px-3 py-2 rounded-3 m-0">
				Bạn đã bị loại. Có ít nhất 1 môn đạt điểm 0.
			</h3>`;
		return;
	}

	if (firstSubject == 0 || secondSubject == 0 || thirdSubject == 0) {
		document.getElementById('auditResult').innerHTML =
			`<h3 class="bg-danger bg-opacity-25 border-start border-5 border-danger my-2 px-3 py-2 rounded-3 m-0">
				Bạn đã bị loại. Có ít nhất 1 môn đạt điểm 0.
			</h3>`;
		return;
	}

	let totalValue =
		firstSubject +
		secondSubject +
		thirdSubject +
		areaPriority +
		groupPriority;

	if (totalValue >= minValue) {
		document.getElementById('auditResult').innerHTML =
			`<h3 class="bg-success bg-opacity-25 border-start border-5 border-success my-2 px-3 py-2 rounded-3 m-0">
				Tổng điểm: ` +
			totalValue +
			` - Bạn đã đậu, xin chúc mừng.
			</h3>`;
	} else {
		document.getElementById('auditResult').innerHTML =
			`<h3 class="bg-danger  bg-opacity-25 border-start border-5 border-danger  my-2 px-3 py-2 rounded-3 m-0">
				Tổng điểm: ` +
			totalValue +
			` - Bạn đã bị loại. Tổng điểm của bạn thấp hơn điểm chuẩn.
			</h3>`;
	}
}

document.getElementById('auditResultBtn').addEventListener('click', scoreAudit);
