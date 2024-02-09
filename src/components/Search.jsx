export const Search = ({ inputVal, handleSubmit, handleInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your city..."
        value={inputVal}
        onChange={handleInput}
      />
      <button>Search</button>
    </form>
  );
};
