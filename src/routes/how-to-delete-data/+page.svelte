<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="space-y-7">
	<h1 class="mb-6 text-center text-5xl font-extrabold text-orange-500 md:mb-8 md:text-5xl">
		Xóa Dữ Liệu Của Bạn khỏi SVELTE TODOS
	</h1>

	<p class="mb-8 text-center text-lg leading-relaxed">
		Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết cung cấp một quy trình rõ ràng để bạn có
		thể kiểm soát dữ liệu cá nhân của mình. Trang này sẽ hướng dẫn bạn cách xóa dữ liệu của mình
		khỏi dịch vụ của chúng tôi.
	</p>

	<h2 class="mt-8 mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-orange-500">
		1. Hiểu Rõ Về Việc Xóa Dữ Liệu
	</h2>
	<p class="mb-4 leading-relaxed">
		Khi bạn yêu cầu xóa dữ liệu, tất cả thông tin cá nhân liên quan đến tài khoản của bạn sẽ được
		xóa khỏi hệ thống đang hoạt động của chúng tôi. Điều này bao gồm:
	</p>
	<ul class="mb-6 ml-6 list-inside list-disc space-y-2">
		<li>Thông tin hồ sơ (tên, email, ảnh đại diện, v.v.)</li>
		<li>
			Nội dung bạn đã tạo hoặc đóng góp (ví dụ: bài viết, bình luận, tin nhắn riêng, trừ khi nội
			dung đó được chia sẻ công khai và không thể xóa mà không ảnh hưởng đến người dùng khác).
		</li>
		<li>Lịch sử hoạt động, cài đặt và tùy chọn cá nhân.</li>
	</ul>
	<p
		class="mb-6 rounded-md border border-red-200 bg-red-50 p-4 leading-relaxed font-semibold text-red-700"
	>
		<strong class="text-red-800">Quan trọng:</strong> Việc xóa dữ liệu là vĩnh viễn và không thể hoàn
		tác. Một khi dữ liệu của bạn đã được xóa, bạn sẽ không thể khôi phục tài khoản hoặc bất kỳ thông
		tin nào liên quan đến nó.
	</p>

	<h2 class="mt-8 mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-orange-500">
		2. Cách Yêu Cầu Xóa Dữ Liệu
	</h2>

	<div class="mb-8">
		<h3 class="mb-3 ml-4 text-xl font-semibold">Cách 1: Xóa tài khoản thông qua NUXT TODOS</h3>
		<p class="mb-4 ml-6 leading-relaxed">
			Đây là cách nhanh nhất và được khuyến nghị để tự động xóa tài khoản và dữ liệu của bạn.
		</p>
		<ol class="ml-10 list-inside list-decimal space-y-3">
			<li>
				Đăng nhập vào tài khoản của bạn trên
				<a
					href="https://nuxt-todos-omega.vercel.app"
					class="font-medium text-blue-500 hover:underline">https://nuxt-todos-omega.vercel.app</a
				>
				hoặc mở ứng dụng.
			</li>
			<li>
				Điều hướng đến mục
				<strong class="font-medium">"Cài đặt Tài khoản"</strong>
				hoặc
				<strong class="font-medium">"Hồ sơ của tôi"</strong>.
			</li>
			<li>
				Tìm và chọn tùy chọn có nhãn
				<strong class="font-medium">"Xóa tài khoản"</strong>
				hoặc
				<strong class="font-medium">"Quản lý dữ liệu của tôi"</strong>.
			</li>
			<li>
				Làm theo các hướng dẫn trên màn hình để xác nhận yêu cầu xóa. Bạn có thể được yêu cầu nhập
				mật khẩu để xác minh.
			</li>
			<li>
				Sau khi xác nhận, tài khoản và dữ liệu của bạn sẽ được đánh dấu để xóa và quá trình sẽ hoàn
				tất trong vòng
				<strong class="text-orange-500">[Số ngày, ví dụ: 7-14 ngày làm việc]</strong>.
			</li>
		</ol>
	</div>

	<div class="mb-8">
		<h3 class="mb-3 ml-4 text-xl font-semibold">Cách 2: Gửi yêu cầu qua Email Hỗ Trợ</h3>
		<p class="mb-4 ml-6 leading-relaxed">
			Nếu bạn không thể truy cập tài khoản hoặc không tìm thấy tùy chọn xóa tài khoản trong ứng
			dụng/website, bạn có thể gửi yêu cầu xóa dữ liệu qua email.
		</p>
		<ul class="ml-10 list-inside list-disc space-y-3">
			<li>
				Gửi một email đến địa chỉ hỗ trợ của chúng tôi:
				<a href="mailto:hnamhocit@gmail.com" class="font-medium text-blue-500 hover:underline"
					>hnamhocit@gmail.com</a
				>
			</li>
			<li>
				Trong tiêu đề email, vui lòng ghi rõ:
				<strong class="font-medium">"Yêu cầu Xóa Dữ Liệu - [Tên người dùng của bạn]"</strong>.
			</li>
			<li>
				Trong nội dung email, vui lòng cung cấp các thông tin sau để chúng tôi có thể xác minh danh
				tính của bạn và xử lý yêu cầu nhanh chóng:
				<ul class="list-circle mt-2 ml-6 list-inside space-y-1 text-sm">
					<li>Tên đầy đủ của bạn đã đăng ký</li>
					<li>Địa chỉ email đã đăng ký tài khoản</li>
					<li>Lý do muốn xóa dữ liệu (không bắt buộc nhưng hữu ích cho việc cải thiện dịch vụ)</li>
				</ul>
			</li>
			<li>
				Chúng tôi sẽ xác minh danh tính của bạn và xử lý yêu cầu xóa dữ liệu trong vòng
				<strong class="text-orange-500">[Số ngày hợp lý, ví dụ: 30 ngày làm việc]</strong>
				kể từ khi nhận được email.
			</li>
		</ul>
	</div>

	<h2 class="mt-8 mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-orange-500">
		3. Lưu Ý Quan Trọng Sau Khi Xóa Dữ Liệu
	</h2>
	<ul class="mb-6 ml-6 list-inside list-disc space-y-2">
		<li>
			**Sao lưu dữ liệu:** Trước khi xóa, hãy đảm bảo bạn đã sao lưu bất kỳ dữ liệu hoặc nội dung
			nào bạn muốn giữ lại.
		</li>
		<li>
			**Dữ liệu sao lưu:** Một số bản sao dữ liệu của bạn có thể vẫn tồn tại trong các bản sao lưu
			hoặc hệ thống lưu trữ dự phòng trong một khoảng thời gian nhất định (thường là
			<strong class="font-medium">[Thời gian, ví dụ: 90 ngày]</strong>) trước khi bị xóa hoàn toàn
			khỏi các hệ thống này. Điều này là cần thiết cho mục đích hoạt động và tuân thủ pháp luật.
		</li>
		<li>
			**Dữ liệu ẩn danh/tổng hợp:** Dữ liệu đã được ẩn danh hoặc tổng hợp (không thể xác định danh
			tính bạn) có thể được giữ lại để phân tích và cải thiện dịch vụ của chúng tôi.
		</li>
		<li>
			**Tuân thủ pháp luật:** Chúng tôi có thể giữ lại một số dữ liệu nhất định nếu được yêu cầu bởi
			luật pháp hoặc để giải quyết các tranh chấp pháp lý.
		</li>
	</ul>

	<h2 class="mt-8 mb-4 border-b-2 border-blue-200 pb-2 text-2xl font-bold text-orange-500">
		Bạn cần trợ giúp?
	</h2>
	<p class="mb-4 leading-relaxed">
		Nếu bạn có bất kỳ câu hỏi nào về quy trình xóa dữ liệu hoặc cần hỗ trợ thêm, đừng ngần ngại liên
		hệ với đội ngũ hỗ trợ của chúng tôi.
	</p>
	<p class="mb-6">
		<Button href="mailto:hnamhocit@gmail.com" class="btn-primary">Liên Hệ Hỗ Trợ</Button>
	</p>

	<p class="mt-8 text-center text-sm">
		Để biết thêm thông tin về cách chúng tôi xử lý dữ liệu của bạn, vui lòng tham khảo
		<a href="/privacy-and-policy" class="text-orange-500 underline">Chính sách quyền riêng tư</a>
		của chúng tôi.
	</p>
</div>
