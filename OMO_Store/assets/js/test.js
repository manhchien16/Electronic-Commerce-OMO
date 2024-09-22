function CancelOrder(orderId) {
    // Chờ cho sự kiện DOMContentLoaded để đảm bảo DOM đã được tải xong
    document.addEventListener('DOMContentLoaded', function() {
        // Gắn sự kiện click cho nút có ID 'cancelOrderBtn'
        document.getElementById('cancelOrderBtn').addEventListener('click', function(event) {
            // Chuyển hướng trang khi nút được nhấn
            window.location.href = 'adm_order_system.php?oid=' + orderId + '&Check=CancelOrder';
        });
    });
}
