
import PropTypes from 'prop-types';

const UserForm = ({ data, updateFiledHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite o seu nome:"
          required
          value={data.name || ""}
          onChange={(e) => {
            updateFiledHandler("name", e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu email:"
          required
          value={data.email || ""}
          onChange={(e) => {
            updateFiledHandler("email", e.target.value);
          }}
        />
      </div>
    </div>
  );
};

UserForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  updateFiledHandler: PropTypes.func.isRequired
};

export default UserForm;
