import { useSelector } from 'react-redux';
import { TrainingPage } from '../../components/TrainingPage';
import { DesktopView } from '../../components/TrainingPage/DesktopView';

import { useMediaQuery } from '../../components/Header/hooks/useMediaQuery';
import { getTraining } from '../../redux/books/books-selectors';

export const TrainingView = () => {
  const training = useSelector(getTraining);
  const isMatches = useMediaQuery('(min-width: 1280px)');
  return (
    <>
      {!isMatches && <TrainingPage />}
      {isMatches && <DesktopView />}
    </>
  );
};

export default TrainingView;
