import { useState } from "react";
import "./AddBookModal.css";

function AddBookModal({ onClose }) {
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Здесь позже добавим создание и сохранение книги.
  };

  return (
    <div
      className="modal"
      onClick={onClose}
    >
      <section
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Закрыть окно"
        >
          ×
        </button>

        <h2 className="modal__title" id="modal-title">
          Добавить книгу
        </h2>

        <p className="modal__description">
          Сохрани новую историю в своей библиотеке.
        </p>

        <form
          className="modal__form"
          onSubmit={handleSubmit}
        >
          <label className="modal__upload">
            {imagePreview ? (
              <img
                className="modal__preview"
                src={imagePreview}
                alt="Предпросмотр обложки"
              />
            ) : (
              <>
                <span className="modal__upload-icon">＋</span>
                <span>Загрузить обложку</span>
                <span className="modal__hint">
                  JPG, PNG или WebP
                </span>
              </>
            )}

            <input
              className="modal__file"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleImageChange}
            />
          </label>

          <div className="modal__fields">
            <label className="modal__field">
              Название книги *
              <input
                name="title"
                type="text"
                placeholder="Название книги"
                required
              />
            </label>

            <label className="modal__field">
              Автор *
              <input
                name="author"
                type="text"
                placeholder="Имя автора"
                required
              />
            </label>

            <label className="modal__field">
              Жанр
              <select name="genre" defaultValue="">
                <option value="" disabled>
                  Выбери жанр
                </option>
                <option value="Фэнтези">Фэнтези</option>
                <option value="Роман">Роман</option>
                <option value="Детектив">Детектив</option>
                <option value="Триллер">Триллер</option>
                <option value="Фантастика">Фантастика</option>
                <option value="Классика">Классика</option>
                <option value="Другое">Другое</option>
              </select>
            </label>

            <label className="modal__field">
              Статус чтения
              <select name="status" defaultValue="planned">
                <option value="planned">В планах</option>
                <option value="reading">Читаю</option>
                <option value="finished">Прочитана</option>
              </select>
            </label>

            <label className="modal__field">
              Заметки
              <textarea
                name="notes"
                rows="3"
                placeholder="Впечатления, мысли, любимые цитаты..."
              />
            </label>
          </div>

          <div className="modal__actions">
            <button
              className="modal__cancel"
              type="button"
              onClick={onClose}
            >
              Отмена
            </button>

            <button
              className="modal__submit"
              type="submit"
            >
              Сохранить книгу
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddBookModal;