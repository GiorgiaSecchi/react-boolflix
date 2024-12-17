import MovieList from "../components/MovieList";

export default function HomePage() {
  return (
    <div className="container py-5">
      <h3 className="text-center text-light">Cerca un film o una serie tv!</h3>

      <div className="mt-4 pt-4">
        <MovieList />
      </div>
    </div>
  );
}
