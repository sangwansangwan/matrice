import React, { useState } from 'react';
import './Product.css';
import { FaStar, FaTrash } from 'react-icons/fa';

const Product = () => {
  const [candidates, setCandidates] = useState([
    {
      name: 'John Doe',
      interviewStatus: 'Scheduled',
      interviewFeedback: 'Great communication skills',
      rating: 4,
    },
    {
      name: 'Jane Smith',
      interviewStatus: 'Completed',
      interviewFeedback: 'Solid technical knowledge',
      rating: 5,
    },
    {
      name: 'Alice Johnson',
      interviewStatus: 'Pending',
      interviewFeedback: 'Good problem-solving skills',
      rating: 3,
    },
  ]);

  const [newCandidate, setNewCandidate] = useState({
    name: '',
    interviewStatus: '',
    interviewFeedback: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCandidate((prevCandidate) => ({
      ...prevCandidate,
      [name]: value,
    }));
  };

  const handleAddCandidate = () => {
    if (newCandidate.name.trim() === '') {
      alert('Please enter candidate name.');
      return;
    }

    setCandidates((prevCandidates) => [...prevCandidates, newCandidate]);
    setNewCandidate({
      name: '',
      interviewStatus: '',
      interviewFeedback: '',
      rating: 0,
    });
  };

  const handleRateCandidate = (index, rating) => {
    setCandidates((prevCandidates) => {
      const updatedCandidates = [...prevCandidates];
      updatedCandidates[index].rating = rating;
      return updatedCandidates;
    });
  };

  const handleDeleteCandidate = (index) => {
    setCandidates((prevCandidates) => {
      const updatedCandidates = [...prevCandidates];
      updatedCandidates.splice(index, 1);
      return updatedCandidates;
    });
  };

  return (
    <div className="container">
      <h1>Candidate Tracker</h1>
      <div>
        <h2>Add Candidate</h2>
        <form>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Candidate Name"
            name="name"
            value={newCandidate.name}
            onChange={handleInputChange}
          />
          <label>Interview Status:</label>
          <select
            name="interviewStatus"
            value={newCandidate.interviewStatus}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Interview Status
            </option>
            <option value="Scheduled">Scheduled</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <label>Interview Feedback:</label>
          <input
            type="text"
            placeholder="Interview Feedback"
            name="interviewFeedback"
            value={newCandidate.interviewFeedback}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleAddCandidate}>
            Add Candidate
          </button>
        </form>
      </div>

      <div>
        <h2>Candidate List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Interview Status</th>
              <th>Interview Feedback</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.name}</td>
                <td>{candidate.interviewStatus}</td>
                <td>{candidate.interviewFeedback}</td>
                <td>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        color={star <= candidate.rating ? '#ffc107' : '#e4e5e9'}
                        onClick={() => handleRateCandidate(index, star)}
                      />
                    ))}
                  </div>
                </td>
                <td>
                  <button onClick={() => handleDeleteCandidate(index)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
