import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const repositories = [
  {
    name: 'design-system',
    language: 'React',
    size: 7320,
    isPublic: true,
    updatedAt: '1 day ago',
  },
  {
    name: 'codeant-ci-app',
    language: 'Javascript',
    size: 5871,
    isPublic: false,
    updatedAt: '2 days ago',
  },
  {
    name: 'analytics-dashboard',
    language: 'Python',
    size: 4521,
    isPublic: false,
    updatedAt: '5 days ago',
  },
  {
    name: 'mobile-app',
    language: 'Swift',
    size: 3096,
    isPublic: true,
    updatedAt: '3 days ago',
  },
  {
    name: 'e-commerce-platform',
    language: 'Java',
    size: 6210,
    isPublic: false,
    updatedAt: '6 days ago',
  },
  {
    name: 'blog-website',
    language: 'HTML/CSS',
    size: 1876,
    isPublic: true,
    updatedAt: '4 days ago',
  },
  {
    name: 'social-network',
    language: 'PHP',
    size: 5432,
    isPublic: false,
    updatedAt: '7 days ago',
  },
];

const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='main-container'>
      <div className='content'>
        <h1>Repositories</h1>
        <p>{filteredRepositories.length} repositories found</p>

        <div className='buttons-container'>
          <button className='refresh-btn'>
            <FontAwesomeIcon icon={faSyncAlt} className='icon' />
            Refresh All
          </button>
          <button className='add-repo-btn'>
            <FontAwesomeIcon icon={faPlus} className='icon' />
            Add Repository
          </button>
        </div>

        <div className='search-bar'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input
            type='text'
            placeholder='Search repositories...'
            className='search-input'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <ul className='repository-list'>
        <div>
          {filteredRepositories.map((repo) => (
              
                <li key={repo.name} className='repository-item'>
                  <div className='repo-details'>
                    <span className='name'>{repo.name}</span>
                    <span className='status'>
                      {repo.isPublic ? 'Public' : 'Private'}
                    </span>
                  </div>
                  <div className='repo-items'>
                    <p className='language'>{repo.language}</p>
                    <span className='dot'> </span>
                    <p className='size'>{repo.size} KB</p>
                    <p className='updated-at'>Updated {repo.updatedAt}</p>
                  </div>
                </li>
              
          ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Repositories;
