import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  // state를 갖을 필요가 없으므로 Class 컴포넌트 일 필요는 없다.
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
