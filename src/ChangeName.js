import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const ChangeName = () => {
  const { id } = useParams();
  const { error, isPending, data: hero } = useFetch('http://localhost:8000/heroes/' + id);
  const [name, setName] = useState('');
  const history = useHistory();
  const [putError, setPutError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedName = { name };

    try {
      const response = await fetch('http://localhost:8000/heroes/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedName)
      });
      if (!response.ok) {
        throw new Error('Failed to update  name');
      };
      history.go(-1);
    }
    catch (err) {
      setPutError(err.message);
    };
  };

  if (isPending) {
    return (
      <div>Loading......</div>
    );
  };

  if (putError) {
    return (
      <div>{putError}</div>
    );
  };

  return (

    <div className="change-name">
      {isPending && <div>Loading...</div>}
      <h2>Change name of {hero && hero.name}</h2>

      {
        <form onSubmit={handleSubmit}>
          <label>New Name:</label>
          {error && <div>{error}</div>}
          <input
            type="text"
            required value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {!isPending && <button>Change Name</button>}
          {isPending && <button disabled>Changing</button>}
        </form>}
    </div>

  );
};

export default ChangeName;