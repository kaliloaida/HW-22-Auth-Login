import { useContext } from 'react';
import { authContext } from '../../store/authContext';
import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  const authCtx = useContext(authContext)
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board! <br/> {authCtx.name}</h1>
      
    </section>
  );
};

export default StartingPageContent;
