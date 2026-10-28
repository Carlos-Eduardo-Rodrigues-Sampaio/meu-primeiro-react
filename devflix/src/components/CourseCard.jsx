function CourseCard({ course, onSelect }) {
  const thumbnail = `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`;

  return (
    <button
      type="button"
      className="course-card"
      onClick={() => onSelect(course)}
    >
      <img
        src={thumbnail}
        alt={`Capa da aula ${course.title}`}
      />

      <div className="course-info">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    </button>
  );
}

export default CourseCard;