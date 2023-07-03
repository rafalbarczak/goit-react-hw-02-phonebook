export const ContactFilter = ({ filter, handleChange }) => (
  <>
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ></input>
    </label>
  </>
);
