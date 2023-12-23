import React, { useState } from 'react';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import './Comments.css';

const Comment = ({ name, description }) => (
  <tr key={name}>
    <td className='btn btn-secondary btn-lg rounded-5 border-danger shadow'>{name}</td>

    <td className='btn btn-warning btn-sm  '>{description}</td>
  </tr>
);

const Comments = () => {
  const jsonData = [
    {
      name: 'Adi',
    
      description: 'Director at AK & Technical Expert.',
    },
    {
      name: 'Khalandar',

      description: 'Director at AK & Writer Expert as a subject',
    },
    {
      name: 'Naveen',
      description: 'Java Developer & Marketing Head',
    },
    {
      name: 'Vindo Kumar K',
      description: 'Operation Head, Technical Subject Matter Expert',
    },
    {
      name: 'Sudheer',
      description: 'Operation Head & Technical Expert',
    },
    {
      name: 'Harika',
      description: 'Front-End Architecture',
    },
    {
      name: 'Mounica',
      description: 'Front-End Architecture',
    },
    {
      name: 'Harish k',
      description: 'UI Developer',
    },
    {
      name: 'Harish B',
      description: 'Front End Developer',
    },
    {
      name: 'Prakash',
      description: 'Software Developer',
    },
    {
      name: 'Priya k',
      description: 'Front End Developer',
    },
    {
      name: 'Sushmita',
      description: 'Content Writer',
    },
  ];

  const [filterName, setFilterName] = useState('');

  const filteredData = jsonData.filter((data) =>
    data.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h3>Developers Role & Support Technology 24/7</h3>
      <div className="mb-3">
        <label htmlFor="nameFilter" className="form-label">Filter by Name:</label>
        <input
          type="text"
          className="form-control"
          id="nameFilter"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
      </div>
      <table className="table table-bordered table-hover table-responsive table-striped-columns">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
           
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data) => (
            <Comment key={data.name} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
