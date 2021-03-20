import { useMediaQuery } from 'react-responsive';

export const Header = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: `(max-width: 850px)` });
  return (
    <header id='header'>
      <div className={!isTabletOrMobile ? 'intro' : 'intro_mobile'}>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className={!isTabletOrMobile 
                ? 'col-md-8 col-md-offset-2 intro-text' 
                : 'col-md-8 col-md-offset-2 intro-text-mobile'}
              >
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
