# Trang Web Truyền Cảm Hứng - Ngọn Lửa Động Lực

Trang web tối giản với ngọn lửa animation nhẹ nhàng và câu quote động viên.

## Cài đặt

```bash
npm install
```

## Chạy ứng dụng

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:5173`

## Build

```bash
npm run build
```

## Tính năng

- ✨ Ngọn lửa animation nhẹ nhàng với CSS
- 🎨 Thiết kế tối giản, tập trung
- 📱 Responsive cho mobile và desktop
- 💫 Animation fade-in mượt mà
- 🎵 Điều khiển nhạc nền với nút play/pause và volume

## Thêm nhạc nền

Để thêm nhạc nền vào trang web:

1. **Cách 1: Sử dụng file nhạc local**
   - Đặt file nhạc vào thư mục `public/` (ví dụ: `public/music.mp3`)
   - Mở file `src/App.jsx`
   - Tìm dòng comment `{/* Thêm file nhạc của bạn vào đây */}`
   - Uncomment và sửa đường dẫn:
     ```jsx
     <source src="/music.mp3" type="audio/mpeg" />
     ```

2. **Cách 2: Sử dụng URL nhạc online**
   - Mở file `src/App.jsx`
   - Tìm dòng comment `{/* Hoặc sử dụng URL nhạc online */}`
   - Uncomment và thay URL:
     ```jsx
     <source src="YOUR_MUSIC_URL_HERE" type="audio/mpeg" />
     ```

**Gợi ý nhạc phù hợp:**
- Nhạc động lực, truyền cảm hứng
- Nhạc không lời, ambient
- Nhạc acoustic nhẹ nhàng
- Piano hoặc guitar solo

Nút điều khiển nhạc sẽ xuất hiện ở góc dưới bên phải màn hình.

# khikhikhi
