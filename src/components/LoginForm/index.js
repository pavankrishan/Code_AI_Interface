import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowUp } from 'react-icons/fa';
import { FiPieChart } from 'react-icons/fi';
import {
  faGithub,
  faBitbucket,
  faAws,
  faGitlab,
  faSteamSymbol,
} from '@fortawesome/free-brands-svg-icons';
import './index.css';

const LoginForm = () => {
  const [selectedOption, setSelectedOption] = useState('SAAS');

  const renderButtons = (providers) => (
    <div className='button-container'>
      {providers.map((provider) => (
        <Link to='/' key={provider.name}>
          <button
            className='login-button'
            aria-label={`Sign in with ${provider.name}`}
          >
            <FontAwesomeIcon
              icon={provider.icon}
              style={{ color: provider.color, margin: '10px' }}
            />
            {`Sign in with ${provider.name}`}
          </button>
        </Link>
      ))}
    </div>
  );

  const providers = [
    { name: 'GitHub', icon: faGithub, color: '#4078c0' },
    { name: 'Bitbucket', icon: faBitbucket, color: '#205081' },
    { name: 'Azure DevOps', icon: faAws, color: '#0078D7' },
    { name: 'GitLab', icon: faGitlab, color: '#FC6D26' },
    { name: 'SSO', icon: faSteamSymbol, color: '#FC6D26' },
  ];

  return (
    <div className='login-form-container'>
      <div className='login-form'>
        <div className='card-container'>
          <div className='card'>
            <div className='header'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXBrM6OuMFTRj22Z-C7loWr78wbJczjXpPgiQpo-8TP__hA99XQe0MRI6EV3Q8AQsCjE&usqp=CAU'
                alt='al-icon'
              />
              <h1 className='heading'>AI to Detect & Autofix Bad Code</h1>
            </div>
            <div className='stats'>
              <div className='stat'>
                <h2>30+</h2>
                <p>Language Support</p>
              </div>
              <div className='stat'>
                <h2>10K+</h2>
                <p>Developers</p>
              </div>
              <div className='stat'>
                <h2>100K+</h2>
                <p>Hours Saved</p>
              </div>
            </div>
          </div>
          <div className='card issues-card'>
            <div className='icon'>
              <FiPieChart size={30} color='green' />
            </div>
            <div className='percent'>
              <FaArrowUp size={15} color='blue' />
              <h3>14%</h3>
              <p>This week</p>
            </div>
            <h2>Issues Fixed</h2>
            <h1>500K+</h1>
          </div>
          <div className='blur-img-container'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXBrM6OuMFTRj22Z-C7loWr78wbJczjXpPgiQpo-8TP__hA99XQe0MRI6EV3Q8AQsCjE&usqp=CAU'
              alt='blur-Logo'
              className='blur-ai-logo'
            />
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='title'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcXBrM6OuMFTRj22Z-C7loWr78wbJczjXpPgiQpo-8TP__hA99XQe0MRI6EV3Q8AQsCjE&usqp=CAU'
            alt='CodeAnt Logo'
            className='code-ai-logo'
          />
          <h1 className='title'>CodeAnt AI</h1>
        </div>
        <div className='header'>
          <h1>Welcome to CodeAnt AI</h1>
        </div>

        <div className='buttons'>
          <button
            className={`button ${selectedOption === 'SAAS' ? 'active' : ''}`}
            onClick={() => setSelectedOption('SAAS')}
          >
            SAAS
          </button>
          <button
            className={`button ${selectedOption === 'Self Hosted' ? 'active' : ''}`}
            onClick={() => setSelectedOption('Self Hosted')}
          >
            Self Hosted
          </button>
        </div>

        <div className='login-options'>
          {selectedOption === 'SAAS'
            ? renderButtons(providers.slice(0, 4))
            : renderButtons([providers[3], providers[4]])}
        </div>
        <p className='footer'>
          By signing up you agree to the{' '}
          <Link to='/privacy-policy'>Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
