import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  // state를 갖을 필요가 없으므로 Class 컴포넌트 일 필요는 없다.
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, idx) => (
            <li key={idx} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

// //class 형태로 작성해봄
// class Movie extends React.Component {
//   render() {
//     const { year, title, summary, poster, genres } = this.props;
//     return (
//       <div className="movie">
//         <img src={poster} alt={title} title={title}></img>
//         <div className="movie__data">
//           <h3 className="movie__title">{title}</h3>
//           <h5 className="movie__year">{year}</h5>
//           <ul className="movie__genres">
//             {genres.map((genre, idx) => (
//               <li key={idx} className="genres__genre">
//                 {genre}
//               </li>
//             ))}
//           </ul>
//           <p className="movie__summary">{summary.slice(0, 180)}...</p>
//         </div>
//       </div>
//     );
//   }
// }

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired //An array of a certain type
};

export default Movie;
